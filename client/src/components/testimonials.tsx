import { Star, StarHalf } from "lucide-react";

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  location: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: "I was skeptical about how much power a balcony system could generate, but I've been amazed! My electricity bills are down by 30% since installation. The team was professional and the system looks great on my balcony in Limassol.",
      name: "Andreas Georgiou",
      location: "Limassol, Cyprus"
    },
    {
      rating: 5,
      text: "As a renter, I never thought I could use solar energy. The balcony system was perfect - easy to install and my landlord had no objections. It's been running flawlessly for 8 months now, and I'm saving about €40 per month.",
      name: "Elena Christodoulou",
      location: "Nicosia, Cyprus"
    },
    {
      rating: 4.5,
      text: "The consultation was thorough and honest. They didn't try to oversell me and recommended the perfect system for my small balcony in Paphos. Installation was clean and quick. Very happy with my decision!",
      name: "Michael Kyriakou",
      location: "Paphos, Cyprus"
    }
  ];

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
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from Cyprus residents who are already enjoying the benefits of our balcony solar solutions.
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
