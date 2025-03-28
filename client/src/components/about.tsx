export default function About() {
  const stats = [
    { value: "500+", description: "Systems installed" },
    { value: "5⭐", description: "Customer satisfaction" },
    { value: "3+", description: "Years of experience" },
    { value: "100%", description: "Cyprus-based team" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              About SolarCyprus
            </h2>
            <p className="text-gray-600 mb-6">
              SolarCyprus is a specialized provider of balcony solar solutions, dedicated to making renewable energy accessible to everyone in Cyprus, including apartment dwellers and renters.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2019 by a team of renewable energy enthusiasts, we've grown to become Cyprus' leading supplier of balcony solar systems, with over 500 installations across the island.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to help Cyprus harness its abundant sunshine while making solar energy accessible to those who can't install traditional rooftop systems.
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
                  src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Solar installation team" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559302995-f8d7c620f2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Cyprus office location" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1612438214708-f428a707dd3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Solar panel installation" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1591099200470-3ba5b11d5ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Team meeting" 
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
