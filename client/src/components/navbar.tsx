import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "@/contexts/translations";
import LanguageSelector from './language-selector';

export default function Navbar() {
  const { translations } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: translations.nav.home, href: "#home" },
    { name: translations.nav.products, href: "#products" },
    { name: translations.nav.benefits, href: "#benefits" },
    { name: translations.nav.installation, href: "#process" },
    { name: translations.nav.faq, href: "#faq" },
    { name: translations.nav.about, href: "#about" }
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
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium hover:text-amber-500 transition ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            <a 
              href="#appointment" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-medium text-sm transition"
            >
              {translations.nav.bookAppointment}
            </a>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button 
            onClick={toggleMobileMenu}
            className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 py-4 px-2 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-medium text-center transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.bookAppointment}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
