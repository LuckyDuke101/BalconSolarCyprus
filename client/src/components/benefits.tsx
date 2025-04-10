import { Sun, Euro, Home, Plug } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

export default function Benefits() {
  const { translations } = useTranslations();
  
  const benefits = [
    {
      icon: <Sun className="text-blue-600 text-xl" />,
      title: translations.benefits.abundantSunshine.title,
      description: translations.benefits.abundantSunshine.description
    },
    {
      icon: <Euro className="text-amber-500 text-xl" />,
      title: translations.benefits.significantSavings.title,
      description: translations.benefits.significantSavings.description
    },
    {
      icon: <Home className="text-green-600 text-xl" />,
      title: translations.benefits.idealForApartments.title,
      description: translations.benefits.idealForApartments.description
    },
    {
      icon: <Plug className="text-red-500 text-xl" />,
      title: translations.benefits.simpleInstallation.title,
      description: translations.benefits.simpleInstallation.description
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/images/12c4e884917f268aa6a972041bf45364.webp" 
                alt="Solar panels on a balcony in Cyprus" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-amber-500">340+</span>
                    <span className="text-sm text-gray-600">Sunny days per year</span>
                  </div>
                  <Sun className="text-4xl text-amber-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              {translations.benefits.title}
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${
                    index === 0 ? 'bg-blue-100' : 
                    index === 1 ? 'bg-yellow-100' : 
                    index === 2 ? 'bg-green-100' : 
                    'bg-red-100'
                  } rounded-lg flex items-center justify-center`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
