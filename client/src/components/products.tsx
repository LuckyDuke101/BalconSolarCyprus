import { Check } from "lucide-react";
import { useTranslations } from "../contexts/translations";

interface Product {
  id: number;
  name: string;
  power: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  popular?: boolean;
}

export default function Products() {
  const { translations } = useTranslations();
  
  const products: Product[] = [
    {
      id: 1,
      name: translations.products.starter.name,
      power: translations.products.starter.power,
      description: translations.products.starter.description,
      image: "/images/Basic.webp",
      features: translations.products.starter.features,
      price: "€799"
    },
    {
      id: 2,
      name: translations.products.standard.name,
      power: translations.products.standard.power,
      description: translations.products.standard.description,
      image: "/images/SF-800pro.webp",
      features: translations.products.standard.features,
      price: "€1,299",
      popular: true
    },
    {
      id: 3,
      name: translations.products.premium.name,
      power: translations.products.premium.power,
      description: translations.products.premium.description,
      image: "/images/800PRO_-DE_9a79a1a0-e2c5-4d2a-9b76-ebd025c7f94c.webp",
      features: translations.products.premium.features,
      price: "€1,999"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">{translations.products.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translations.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col h-full">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-2">
                  <h3 className="font-poppins font-semibold text-xl">{product.name}</h3>
                  {product.popular && (
                    <span className="ml-2 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{translations.products.starter.popular}</span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-green-100 text-green-700 font-medium px-2.5 py-0.5 rounded-full mr-2">{product.power}</span>
                  <span>{product.description}</span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-gray-600 flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between">
                  <p className="font-poppins font-semibold text-xl">{product.price}</p>
                  <a 
                    href="#appointment" 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
                  >
                    {translations.nav.bookAppointment}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
