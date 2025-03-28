export default function InstallationProcess() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We visit your home to assess your balcony and discuss your energy needs."
    },
    {
      number: 2,
      title: "Custom Design",
      description: "Our team designs a system tailored to your specific balcony space and energy goals."
    },
    {
      number: 3,
      title: "Quick Installation",
      description: "Professional installation typically takes just 2-4 hours with minimal disruption."
    },
    {
      number: 4,
      title: "Start Saving",
      description: "Begin generating your own clean electricity and watch your bills decrease immediately."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Simple Installation Process
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Getting your balcony solar system up and running is quick and easy with our professional team.
          </p>
        </div>
        
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <span className="font-poppins font-bold text-2xl text-blue-600">{step.number}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
