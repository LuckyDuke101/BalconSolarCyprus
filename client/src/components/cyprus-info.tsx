import { Clock, Wrench, Home, PiggyBank, Truck, Maximize2 } from "lucide-react";

export default function CyprusInfo() {
  const comparisons = [
    { 
      icon: <Clock className="text-4xl text-white" />,
      title: "Quick Installation",
      traditional: "1-2 weeks installation time",
      balcony: "1-2 hours setup time",
      highlight: true
    },
    { 
      icon: <Wrench className="text-4xl text-white" />,
      title: "Permits & Paperwork",
      traditional: "Building permits required",
      balcony: "No permits needed under 2kW",
      highlight: true
    },
    { 
      icon: <Home className="text-4xl text-white" />,
      title: "Property Type",
      traditional: "Requires owned property",
      balcony: "Works for apartments & rentals",
      highlight: true
    },
    { 
      icon: <PiggyBank className="text-4xl text-white" />,
      title: "Initial Investment",
      traditional: "€5,000-15,000+",
      balcony: "€800-2,500",
      highlight: true
    },
    { 
      icon: <Truck className="text-4xl text-white" />,
      title: "Portability",
      traditional: "Fixed permanent installation",
      balcony: "Can move with you",
      highlight: true
    },
    { 
      icon: <Maximize2 className="text-4xl text-white" />,
      title: "Space Efficiency",
      traditional: "Requires large roof area",
      balcony: "Uses unused balcony space",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Why Choose Balcony Solar?
          </h2>
          <p className="max-w-3xl mx-auto">
            Balcony solar systems offer significant advantages over traditional rooftop installations, especially in Cyprus' apartment-heavy urban areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-700 p-3 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-center text-xl font-bold mb-4">{item.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Traditional:</span>
                  <span className="text-white">{item.traditional}</span>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Balcony Solar:</span>
                  <span className="text-amber-300 font-semibold">{item.balcony}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#appointment" 
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition"
          >
            Get Your Balcony Solar Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
