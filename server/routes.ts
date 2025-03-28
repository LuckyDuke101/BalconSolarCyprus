import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertAppointmentSchema, 
  insertContactMessageSchema 
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/appointments", async (req: Request, res: Response) => {
    try {
      // Validate appointment data
      const appointmentData = insertAppointmentSchema.safeParse(req.body);
      
      if (!appointmentData.success) {
        const errorMessage = fromZodError(appointmentData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Create appointment
      const appointment = await storage.createAppointment(appointmentData.data);
      res.status(201).json(appointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      res.status(500).json({ message: "Failed to create appointment" });
    }
  });

  app.get("/api/appointments", async (req: Request, res: Response) => {
    try {
      const appointments = await storage.getAllAppointments();
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Failed to fetch appointments" });
    }
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate contact message data
      const messageData = insertContactMessageSchema.safeParse(req.body);
      
      if (!messageData.success) {
        const errorMessage = fromZodError(messageData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Create contact message
      const message = await storage.createContactMessage(messageData.data);
      res.status(201).json(message);
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
