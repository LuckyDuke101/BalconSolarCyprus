import { Sun, Zap, Euro, Leaf } from "lucide-react";

export default function CyprusInfo() {
  const stats = [
    { 
      icon: <Sun className="text-4xl text-amber-500" />,
      value: "3,300+",
      description: "Hours of sunshine annually"
    },
    { 
      icon: <Zap className="text-4xl text-amber-500" />,
      value: "25%",
      description: "Higher efficiency than Northern Europe"
    },
    { 
      icon: <Euro className="text-4xl text-amber-500" />,
      value: "€0.22/kWh",
      description: "Average electricity cost in Cyprus"
    },
    { 
      icon: <Leaf className="text-4xl text-amber-500" />,
      value: "2kW",
      description: "No permit needed under this capacity"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Cyprus Solar Advantage
          </h2>
          <p className="max-w-3xl mx-auto">
            Cyprus provides the perfect environment for solar energy with its Mediterranean climate and supportive regulations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-center text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-center text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
