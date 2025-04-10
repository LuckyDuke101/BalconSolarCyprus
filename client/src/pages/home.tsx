import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
// import Features from "@/components/features"; // Removed as requested - "Warum Balkon-Solar wählen" section
import Products from "@/components/products";
import Benefits from "@/components/benefits";
import SolarCalculator from "@/components/solar-calculator";
import AppTracking from "@/components/app-tracking";
import NightMode from "@/components/night-mode";
import InstallationProcess from "@/components/installation-process";
import Testimonials from "@/components/testimonials";
import AppointmentForm from "@/components/appointment-form";
import FAQ from "@/components/faq";
import About from "@/components/about";
import Footer from "@/components/footer";
// import CyprusInfo from "@/components/cyprus-info"; // Removed as requested - "Warum Balkon-Solar wählen" section

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Benefits /> {/* Moved to second place - "Why Choose Balcony Solar in Cyprus?" section */}
      {/* <Features /> */} {/* Removed as requested - "Warum Balkon-Solar wählen" section */}
      <Products />
      {/* <CyprusInfo /> */} {/* Removed as requested - "Why Choose Balcony Solar?" section */}
      <SolarCalculator />
      <AppTracking />
      <NightMode />
      <InstallationProcess />
      <Testimonials />
      <FAQ />
      <About />
      <AppointmentForm />
      <Footer />
      
      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}
