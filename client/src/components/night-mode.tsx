import { Cloud, Sun, Sunrise, Sunset, BatteryCharging } from "lucide-react";
import { useTranslations } from "@/contexts/translations";
import { getAssetPath } from "@/utils/assetUtils";

export default function NightMode() {
  const { translations } = useTranslations();
  
  const features = [
    {
      icon: <Sunrise className="text-amber-500 text-xl" />,
      title: translations.lowLightPerformance.earlyMorning.title,
      description: translations.lowLightPerformance.earlyMorning.description
    },
    {
      icon: <Cloud className="text-blue-600 text-xl" />,
      title: translations.lowLightPerformance.cloudyDay.title,
      description: translations.lowLightPerformance.cloudyDay.description
    },
    {
      icon: <Sunset className="text-orange-500 text-xl" />,
      title: translations.lowLightPerformance.eveningProduction.title,
      description: translations.lowLightPerformance.eveningProduction.description
    },
    {
      icon: <BatteryCharging className="text-green-600 text-xl" />,
      title: translations.lowLightPerformance.lowLightEfficiency.title,
      description: translations.lowLightPerformance.lowLightEfficiency.description
    }
  ];

  return (
    <section id="low-light-performance" className="py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-slate-800">
            {translations.lowLightPerformance.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {translations.lowLightPerformance.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-3/5">
            <div className="relative">
              <img 
                src={getAssetPath("/images/night-mode.webp")} 
                alt="Solar panels working in low-light and cloudy conditions" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute -top-5 -right-5 bg-blue-600 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">14V</span>
                    <span className="text-sm text-blue-100">Startup</span>
                  </div>
                  <Cloud className="text-4xl text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5">            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-90 transition shadow-md">
                  <div className={`flex-shrink-0 w-12 h-12 ${
                    index === 0 ? 'bg-amber-500' : 
                    index === 1 ? 'bg-blue-600' : 
                    index === 2 ? 'bg-orange-500' : 
                    'bg-green-600'
                  } rounded-lg flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#appointment" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                {translations.lowLightPerformance.ctaButton}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 