import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Benefits", href: "#benefits" },
    { name: "Installation", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Sun className={`h-6 w-6 mr-2 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`} />
          <span className={`font-poppins font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>SolarCyprus</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-amber-400'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <a 
          href="#appointment" 
          className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Book Appointment
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-800 hover:text-blue-600 py-2 px-4 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md font-medium transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
