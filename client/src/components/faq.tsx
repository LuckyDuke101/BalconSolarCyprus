import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Do I need permission to install a balcony solar system in Cyprus?",
      answer: "For small balcony installations under 2kW, you generally don't need special permits in Cyprus. However, if you're renting, you should get your landlord's permission. For apartment buildings, it's recommended to inform the building management. Our team will guide you through any specific requirements based on your location and situation."
    },
    {
      question: "How much electricity can a balcony solar system generate in Cyprus?",
      answer: "In Cyprus' sunny climate, a 1kW balcony system typically generates around 1,600-1,800 kWh per year. Our 600W starter kit would produce approximately 900-1,080 kWh annually, while the 1.5kW premium system can generate up to 2,700 kWh per year. This can offset a significant portion of a typical household's electricity usage, especially for appliances used during daylight hours."
    },
    {
      question: "How are the panels attached to my balcony?",
      answer: "We use non-invasive mounting systems that can be secured to balcony railings, walls, or floors without causing damage. The mounting system is designed to withstand Cyprus' weather conditions, including occasional strong winds. For renters, we can use temporary mounting solutions that don't require permanent modifications to the property."
    },
    {
      question: "What maintenance do balcony solar panels require?",
      answer: "Balcony solar systems require minimal maintenance. In Cyprus' dusty environment, occasional cleaning with water is recommended to maintain optimal efficiency. We suggest cleaning the panels every 2-3 months or after dust storms. The systems have no moving parts, which means there's very little that can go wrong. All our systems come with monitoring, so you'll be alerted if there's any drop in performance."
    },
    {
      question: "How long will the solar panels last?",
      answer: "Our solar panels are designed to last 25+ years. They come with performance warranties guaranteeing at least 80% of their original output after 25 years. The inverters typically have a 10-15 year warranty. Cyprus' climate is ideal for solar panels, and the lack of extreme weather conditions helps extend their lifespan compared to more variable climates."
    },
    {
      question: "Are there any government incentives for solar in Cyprus?",
      answer: "Cyprus occasionally offers incentives for renewable energy adoption. While most major programs focus on larger systems, there have been smaller grants available for residential installations. During your consultation, we'll provide up-to-date information about any available incentives or tax benefits that you might qualify for with your balcony system."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our balcony solar solutions for Cyprus.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
