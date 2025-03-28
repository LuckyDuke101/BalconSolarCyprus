import { Link } from "wouter";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center text-white bg-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Balcony Solar Solutions for Cyprus
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Harness the abundant Cyprus sunshine with our easy-to-install balcony solar systems. Save on energy bills while contributing to a greener future.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#products" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium text-center transition"
            >
              View Products
            </a>
            <a 
              href="#appointment" 
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white px-8 py-3 rounded-full font-medium text-center transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-hero {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80');
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </section>
  );
}
