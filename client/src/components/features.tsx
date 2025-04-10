import { Zap, Coins, Leaf } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

export default function Features() {
  const { translations } = useTranslations();
  
  const features = [
    {
      icon: <Zap className="text-blue-600 text-2xl" />,
      title: translations.features.energyIndependence.title,
      description: translations.features.energyIndependence.description
    },
    {
      icon: <Coins className="text-amber-500 text-2xl" />,
      title: translations.features.costSavings.title,
      description: translations.features.costSavings.description
    },
    {
      icon: <Leaf className="text-green-600 text-2xl" />,
      title: translations.features.ecoFriendly.title,
      description: translations.features.ecoFriendly.description
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            {translations.features.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translations.features.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className={`w-16 h-16 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-yellow-100' : 'bg-green-100'} rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
