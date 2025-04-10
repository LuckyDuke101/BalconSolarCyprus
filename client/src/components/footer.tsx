import { Facebook, Instagram, Twitter, Linkedin, Sun } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations } = useTranslations();
  
  const quickLinks = [
    { name: translations.nav.home, href: "#home" },
    { name: translations.nav.products, href: "#products" },
    { name: translations.nav.benefits, href: "#benefits" },
    { name: translations.nav.installation, href: "#process" },
    { name: translations.nav.faq, href: "#faq" },
    { name: translations.nav.about, href: "#about" }
  ];

  const contactInfo = [
    { icon: "map-marker-alt", text: "123 Makarios Avenue, Nicosia 1065, Cyprus" },
    { icon: "phone", text: "+357 22 123 456" },
    { icon: "envelope", text: "info@solarcyprus.com" }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" },
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="text-amber-500 h-6 w-6 mr-2" />
              <span className="font-poppins font-bold text-xl">SolarCyprus</span>
            </div>
            <p className="text-gray-400 mb-4">
              {translations.footer.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{translations.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{translations.footer.contact}</h4>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className={`fas fa-${item.icon} mt-1 mr-2 text-gray-400`}></i>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{translations.footer.newsletter}</h4>
            <p className="text-gray-400 mb-4">
              {translations.footer.subscribeText}
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={translations.footer.emailPlaceholder} 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} SolarCyprus. {translations.footer.allRightsReserved}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">{translations.footer.privacyPolicy}</a>
              <a href="#" className="text-gray-400 hover:text-white transition">{translations.footer.termsOfService}</a>
              <a href="#" className="text-gray-400 hover:text-white transition">{translations.footer.cookiePolicy}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
