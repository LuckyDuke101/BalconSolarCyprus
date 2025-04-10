import express, { type Request, Response, NextFunction } from "express";
import fetch from "node-fetch"; // Add fetch for making API calls
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// --- New PVGIS API Endpoint ---
app.get("/api/pvgis", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { lat, lon, peakpower, angle, aspect } = req.query;
    const loss = 14; // Default system loss
    const outputformat = "json";
    const pvtechchoice = "crystSi"; // Common tech choice

    // Validate required parameters
    if (!lat || !lon || !peakpower) {
      return res.status(400).json({ message: "Missing required parameters: lat, lon, peakpower" });
    }

    const pvgisUrl = `https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=${lat}&lon=${lon}&peakpower=${peakpower}&loss=${loss}&angle=${angle || 0}&aspect=${aspect || 0}&outputformat=${outputformat}&pvtechchoice=${pvtechchoice}`;
    
    log(`Calling PVGIS: ${pvgisUrl}`);

    const pvgisResponse = await fetch(pvgisUrl);
    
    if (!pvgisResponse.ok) {
        // Try to get error details from PVGIS response body
        let pvgisError = `PVGIS API error ${pvgisResponse.status}: ${pvgisResponse.statusText}`;
        try {
            const errorBody = await pvgisResponse.json(); 
            // Type guard to safely check if errorBody is an object with a string message
            if (typeof errorBody === 'object' && errorBody !== null && typeof (errorBody as any).message === 'string') {
              pvgisError = (errorBody as any).message;
            }
        } catch (e) {
            // If body isn't JSON or empty, use status text
            log("Could not parse PVGIS error body as JSON");
        }
        log(`PVGIS Error: ${pvgisError}`);
        // Send a proper JSON error response to the frontend
        return res.status(502).json({ message: `Error contacting PVGIS service: ${pvgisError}` });
    }
    
    const data = await pvgisResponse.json();
    res.json(data);

  } catch (error: any) {
    // Catch internal server errors (e.g., network issues calling fetch)
    log(`Internal error in /api/pvgis: ${error.message}`);
    // Pass to the global error handler, which should send JSON
    next(error);
  }
});
// --- End PVGIS API Endpoint ---

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    log(`Error: ${status} - ${message}`); // Log the error
    res.status(status).json({ message });
    // throw err; // Removed throwing to prevent crash, logging is sufficient
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
