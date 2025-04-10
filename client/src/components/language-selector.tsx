import { useState, useRef, useEffect } from 'react';
import { useTranslations } from '@/contexts/translations';
import { ChevronDown } from 'lucide-react';

const languageNames = {
  en: 'English',
  de: 'Deutsch',
  el: 'Ελληνικά'
};

const languageFlags = {
  en: '🇬🇧',
  de: '🇩🇪',
  el: '🇬🇷'
};

export default function LanguageSelector() {
  const { currentLanguage, setLanguage } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang: 'en' | 'de' | 'el') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <span className="text-xl">{languageFlags[currentLanguage]}</span>
        <span className="text-sm font-medium hidden md:inline">{languageNames[currentLanguage]}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg z-50">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition ${
                currentLanguage === code ? 'font-bold bg-gray-50' : ''
              }`}
              onClick={() => changeLanguage(code as 'en' | 'de' | 'el')}
            >
              <span className="mr-2 text-xl">{languageFlags[code as 'en' | 'de' | 'el']}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 