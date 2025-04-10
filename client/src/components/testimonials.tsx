import { Star, StarHalf } from "lucide-react";
import { useTranslations } from "@/contexts/translations";

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  location: string;
}

export default function Testimonials() {
  const { translations } = useTranslations();
  
  // Add ratings to the translated testimonials
  const testimonials: Testimonial[] = translations.testimonials.items.map((item, index) => ({
    rating: index === 2 ? 4.5 : 5, // third testimonial gets 4.5 stars, others get 5
    text: item.text,
    name: item.name,
    location: item.location
  }));

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-amber-500 text-amber-500" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-amber-500 text-amber-500" />);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            {translations.testimonials.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translations.testimonials.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="italic text-gray-600 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
