import { Phone, PieChart, BarChart, LineChart } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

export default function AppTracking() {
  const { translations } = useTranslations();
  
  const features = [
    {
      icon: <PieChart className="text-purple-600 text-xl" />,
      title: translations.appTracking.realTimeEnergy.title,
      description: translations.appTracking.realTimeEnergy.description
    },
    {
      icon: <BarChart className="text-green-600 text-xl" />,
      title: translations.appTracking.savingsCalculator.title,
      description: translations.appTracking.savingsCalculator.description
    },
    {
      icon: <LineChart className="text-blue-600 text-xl" />,
      title: translations.appTracking.performanceAnalysis.title,
      description: translations.appTracking.performanceAnalysis.description
    },
    {
      icon: <Phone className="text-amber-500 text-xl" />,
      title: translations.appTracking.mobileNotifications.title,
      description: translations.appTracking.mobileNotifications.description
    }
  ];

  return (
    <section id="app-tracking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              {translations.appTracking.title}
            </h2>
            
            <p className="text-gray-600 mb-8">
              {translations.appTracking.subtitle}
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${
                    index === 0 ? 'bg-purple-100' : 
                    index === 1 ? 'bg-green-100' : 
                    index === 2 ? 'bg-blue-100' : 
                    'bg-yellow-100'
                  } rounded-lg flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">
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
                {translations.appTracking.ctaButton}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/images/AppImage.png" 
                alt="Solar panel tracking mobile app" 
                className="rounded-lg shadow-xl w-full h-auto object-contain max-h-[700px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-green-500">24/7</span>
                    <span className="text-sm text-gray-600">Monitoring</span>
                  </div>
                  <Phone className="text-4xl text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 