import { useTranslations } from "@/contexts/translations";

export default function InstallationProcess() {
  const { translations } = useTranslations();

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            {translations.installation.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            {translations.installation.subtitle}
          </p>
        </div>
        
        <div className="w-full flex justify-center mb-20">
          <img 
            src="/images/Setup.webp" 
            alt="Solar panel installation process" 
            className="w-auto h-auto max-w-full max-h-[500px] object-contain"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {translations.installation.steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="font-poppins font-bold text-2xl text-white">{index + 1}</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
