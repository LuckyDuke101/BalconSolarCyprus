import { Link } from "wouter";
import { useTranslations } from "@/contexts/translations";
import { getAssetPath } from "@/utils/assetUtils";

export default function Hero() {
  const { translations } = useTranslations();
  const heroImagePath = getAssetPath("/images/SF-800pro.webp");
  
  return (
    <section id="home" className="h-screen flex items-center text-white bg-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            {translations.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {translations.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#products" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium text-center transition"
            >
              {translations.hero.ctaButton}
            </a>
            <a 
              href="#appointment" 
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white px-8 py-3 rounded-full font-medium text-center transition"
            >
              {translations.nav.bookAppointment}
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          .bg-hero {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImagePath}');
            background-position: center;
            background-size: cover;
          }
        `}
      </style>
    </section>
  );
}
