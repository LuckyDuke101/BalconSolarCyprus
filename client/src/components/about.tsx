import { useTranslations } from "@/contexts/translations";

export default function About() {
  const { translations } = useTranslations();
  
  const stats = [
    { value: "500+", description: translations.about.stats.systemsInstalled },
    { value: "25+", description: translations.about.stats.yearsExperience },
    { value: "5⭐", description: translations.about.stats.satisfaction },
    { value: "100%", description: translations.about.stats.licensedSpecialists }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              {translations.about.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {translations.about.germanExpertise}
            </p>
            <p className="text-gray-600 mb-6">
              {translations.about.zendurePartner}
            </p>
            <p className="text-gray-600 mb-6">
              {translations.about.specializedTeam}
            </p>
            <p className="text-gray-600 mb-6">
              {translations.about.licenses}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1636761358954-d1844a691c4f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Solar panels on a Mediterranean style villa in Cyprus" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=2072&auto=format&fit=crop" 
                  alt="German engineered solar technology with precision design" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2059&auto=format&fit=crop" 
                  alt="Professional solar installation team at work" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Solar energy consultation with a customer in Cyprus" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
