import { DE, GB } from 'country-flag-icons/react/3x2';
import { useTranslations } from '@/contexts/translations';

type Language = 'en' | 'de';

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useTranslations();
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full overflow-hidden ${currentLanguage === 'en' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Switch to English"
        title="English"
      >
        <GB className="w-8 h-auto" />
      </button>
      
      <button
        onClick={() => setLanguage('de')}
        className={`flex items-center justify-center w-8 h-8 rounded-full overflow-hidden ${currentLanguage === 'de' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Switch to German"
        title="Deutsch"
      >
        <DE className="w-8 h-auto" />
      </button>
    </div>
  );
} 