import { Check } from "lucide-react";

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
  const products: Product[] = [
    {
      id: 1,
      name: "Starter Balcony Kit",
      power: "600W",
      description: "Ideal for small balconies",
      image: "https://images.unsplash.com/photo-1627335650561-5325f4222945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "2 x 300W high-efficiency panels",
        "Microinverter included",
        "Easy mounting system",
        "5-year warranty"
      ],
      price: "€799"
    },
    {
      id: 2,
      name: "Standard Balcony Kit",
      power: "1000W",
      description: "Perfect for medium balconies",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
      features: [
        "4 x 250W high-efficiency panels",
        "Grid-tie inverter included",
        "Adjustable mounting brackets",
        "10-year warranty"
      ],
      price: "€1,299",
      popular: true
    },
    {
      id: 3,
      name: "Premium Balcony Kit",
      power: "1500W",
      description: "For large balconies & terraces",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80",
      features: [
        "6 x 250W high-efficiency panels",
        "Smart inverter with monitoring",
        "Premium mounting system",
        "15-year comprehensive warranty"
      ],
      price: "€1,999"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Solar Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from our range of high-quality balcony solar systems, designed specifically for the Cyprus climate and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <h3 className="font-poppins font-semibold text-xl">{product.name}</h3>
                  {product.popular && (
                    <span className="ml-2 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Popular</span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-green-100 text-green-700 font-medium px-2.5 py-0.5 rounded-full mr-2">{product.power}</span>
                  <span>{product.description}</span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 h-4 w-4 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="font-poppins font-semibold text-xl">{product.price}</p>
                  <a 
                    href="#appointment" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    Book Consultation
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
