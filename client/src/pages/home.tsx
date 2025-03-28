import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Products from "@/components/products";
import Benefits from "@/components/benefits";
import CyprusInfo from "@/components/cyprus-info";
import InstallationProcess from "@/components/installation-process";
import Testimonials from "@/components/testimonials";
import AppointmentForm from "@/components/appointment-form";
import FAQ from "@/components/faq";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Benefits />
      <CyprusInfo />
      <InstallationProcess />
      <Testimonials />
      <AppointmentForm />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      
      {/* Add Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      
      {/* Add custom styles for font families */}
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
          scroll-behavior: smooth;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}
