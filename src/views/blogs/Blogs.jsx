import React from "react";

const TransportationBlog = () => {
  const newsArticles = [
    {
      id: 1,
      category: "Car & Road Trips",
      title: "Essential Car Checks Before Your Next Road Adventure",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1712496472646-89cd4a20f3c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Mechanic checking car engine",
      excerpt:
        "Planning a road trip? Here’s what you need to check before hitting the road.",
      content: [
        "Inspect your car’s engine oil, tire pressure, and brakes.",
        "Pack travel must-haves: charging cables, snacks, maps.",
        "Leverage apps for scenic, efficient, or toll-free routing.",
      ],
      author: "Drive & Discover",
      date: "June 14, 2025",
    },
    {
      id: 2,
      category: "Bus Travel & Smart Booking",
      title: "How Smart Booking is Reinventing Bus Travel",
      imageUrl:
        "data:image/webp;base64,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",
      altText: "Luxury coach bus on highway",
      excerpt:
        "Today’s buses are connected, comfortable, and easy to book. Here’s why people are switching back.",
      content: [
        "Use mobile apps for real-time bookings and digital tickets.",
        "Modern coaches now offer onboard WiFi, power outlets, and GPS tracking.",
        "Eco-conscious riders are choosing buses over short flights.",
      ],
      author: "BusRoutes Weekly",
      date: "June 12, 2025",
    },
    {
      id: 3,
      category: "Bike & Two-Wheeler Mobility",
      title: "Scooters, Bikes & The Rise of Urban Micro-Mobility",
      imageUrl:
        "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2023/06/bike.jpg",
      altText: "Rider on a scooter in city",
      excerpt:
        "Shared scooters and bike taxis are solving first-mile/last-mile problems in India’s crowded cities.",
      content: [
        "Platforms like Rapido and Yulu are popular for short urban trips.",
        "Cost-effective and quick for solo riders.",
        "Cities are introducing designated lanes and parking spaces.",
      ],
      author: "Urban Mobility Insights",
      date: "June 14, 2025",
    },
    {
      id: 4,
      category: "Truck & Commercial Logistics",
      title: "Smart Trucking: From Fleet AI to Cleaner Deliveries",
      imageUrl:
        "https://images.unsplash.com/photo-1633155565182-16c06ed45ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnQlMjBUcnVja2luZyUzQSUyMEZyb20lMjBGbGVldCUyMEFJJTIwdG8lMjBDbGVhbmVyJTIwRGVsaXZlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      altText: "Truck on desert highway",
      excerpt:
        "AI-powered logistics and electric trucks are streamlining India’s supply chain.",
      content: [
        "Fleet tracking boosts efficiency and safety.",
        "EV trucks reduce costs and environmental impact.",
        "Automation is gaining traction for warehouse-to-retail delivery.",
      ],
      author: "Fleet Forward",
      date: "June 10, 2025",
    },
    {
      id: 5,
      category: "Long Trips & Comfort Rides",
      title:
        "Planning a Getaway? Long-Distance Travel is More Comfortable Than Ever",
      imageUrl:
        "https://platinum-aviation.com/wp-content/uploads/2025/01/private-chauffeur-1024x683.webp", // Corrected image URL
      altText: "Luxury car with scenic view",
      excerpt:
        "From chauffeur services to premium SUVs, long journeys are turning luxurious.",
      content: [
        "Hire luxury SUVs or sedans for hill stations and intercity rides.",
        "Chauffeurs with GPS tracking and verified profiles add comfort.",
        "Flexible bookings with return trips are growing in popularity.",
      ],
      author: "Highway Nomads",
      date: "June 08, 2025",
    },
    {
      id: 6,
      category: "Driver Booking & Rentals",
      title: "How Driver-On-Demand Apps Are Changing Travel Plans",
      imageUrl:
        "https://th.bing.com/th/id/OIP.GyvgtjUmAYFUX4o60nqqPwHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      altText: "Professional driver with customer",
      excerpt:
        "From hiring drivers for a few hours to renting a car with a chauffeur, discover the options.",
      content: [
        "Urban users now prefer renting cars with drivers for business or errands.",
        "Apps offer hourly pricing, real-time location tracking, and verified professionals.",
        "Rural and suburban demand is growing for weddings, tours, and pickups.",
      ],
      author: "Mobility Manager",
      date: "June 09, 2025",
    },
  ];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/1000x600?text=Image+Unavailable";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <header className="bg-white shadow-sm py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            <span className="text-indigo-600">Latest</span> Blogs
          </h1>
        </div>
      </header>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src="https://www.cooperhewitt.org/wp-content/uploads/2018/12/Multiway-bld-small_Bloomberg.jpg"
              alt="Futuristic multi-modal transport hub"
              onError={handleImageError}
            />
          </div>
          <div className="md:w-1/2">
            <span className="inline-block bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide mb-3">
              Feature Story
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Connecting Cities: The Dawn of Integrated Mobility Networks
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Imagine a future where your journey across a city, or even
              between countries, is seamlessly coordinated across multiple
              transport modes – from ride-hailing to high-speed rail.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Read the Full Story
              <svg
                className="ml-3 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Stay updated on the latest trends, news, and features from Vramon Sathi.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <img
                className="h-56 w-full object-cover"
                src={article.imageUrl}
                alt={article.altText}
                onError={handleImageError}
              />
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full uppercase font-semibold tracking-wide">
                    {article.category}
                  </span>
                  <span className="ml-3 border-l border-gray-300 pl-3">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-600 mb-3">
                    By <span className="font-semibold">{article.author}</span>
                  </p>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() =>
                      alert(
                        `Reading more about: ${article.title}\n\n${article.content.join(
                          "\n\n"
                        )}`
                      )
                    }
                  >
                    Read More
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TransportationBlog;