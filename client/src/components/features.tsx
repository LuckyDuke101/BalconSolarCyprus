import { Zap, Coins, Leaf } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="text-blue-600 text-2xl" />,
      title: "Energy Independence",
      description: "Generate your own electricity and reduce dependence on the grid with our balcony solar panels."
    },
    {
      icon: <Coins className="text-amber-500 text-2xl" />,
      title: "Cost Savings",
      description: "Lower your electricity bills with free solar energy, especially valuable in Cyprus's sunny climate."
    },
    {
      icon: <Leaf className="text-green-600 text-2xl" />,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint with clean, renewable energy that's good for Cyprus and the planet."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
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
