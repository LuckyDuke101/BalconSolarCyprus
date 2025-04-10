import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { translations } = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            {translations.faq.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translations.faq.subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {translations.faq.questions.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between bg-gray-50 p-5 text-left font-medium hover:bg-gray-100 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="bg-white p-5 border-t border-gray-200">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
