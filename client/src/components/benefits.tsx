import { Sun, Euro, Home, Plug } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Sun className="text-blue-600 text-xl" />,
      title: "Abundant Sunshine",
      description: "Cyprus enjoys over 340 days of sunshine per year, making it one of the best locations in Europe for solar energy production."
    },
    {
      icon: <Euro className="text-amber-500 text-xl" />,
      title: "Significant Savings",
      description: "With high electricity rates in Cyprus, balcony solar systems typically pay for themselves within 3-5 years, then provide free electricity."
    },
    {
      icon: <Home className="text-green-600 text-xl" />,
      title: "Ideal for Apartments",
      description: "Our systems are designed for renters and apartment owners who can't install traditional rooftop solar but still want to benefit from renewable energy."
    },
    {
      icon: <Plug className="text-red-500 text-xl" />,
      title: "Simple Installation",
      description: "No complex permits required for balcony systems under 2kW in Cyprus. Our solutions can be installed in just a few hours with minimal disruption."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
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
              Why Choose Balcony Solar in Cyprus?
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
