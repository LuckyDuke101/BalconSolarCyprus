import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { TranslationsProvider } from "@/contexts/translations";
import { useState, useEffect } from "react";

// Hash location hook for GitHub Pages
const useHashLocation = (): [string, (to: string) => void] => {
  const [hash, setHash] = useState(window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.replace("#", "") || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [hash, navigate];
};

function Router() {
  // Use hash-based location for GitHub Pages compatibility
  const [location, navigate] = useHashLocation();
  
  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationsProvider>
        <Router />
        <Toaster />
      </TranslationsProvider>
    </QueryClientProvider>
  );
}

export default App;
