import React from "react";




const blogsData = [
  {
    id: 1,
    title: "Vramon Sathi Growth in Urban Mobility",
    description:
      "Discover how Vramon Sathi is revolutionizing ride-hailing with affordable and flexible services.",
      image:"first.jpg",   
    category: "Growth",
  },
  {
    id: 2,
    title: "Top 5 Features of Vramon Sathi You Should Know",
    description:
      "Learn about the features that make Vramon Sathi stand out from other ride-hailing platforms.",
    image: "second.jpg",
    category: "Features",
  },
  {
    id: 3,
    title: "Why Vramon Sathi is a Game-Changer for Drivers",
    description:
      "Explore how Vramon Sathi empowers drivers with fair earnings and flexibility.",
    image: "third.jpg",
    category: "Drivers",
  },
  {
    id: 4,
    title: "Safety Measures in Vramon Sathi Rides",
    description:
      "Read about the robust safety features Vramon Sathi offers for both riders and drivers.",
    image: "fourth.jpg",
    category: "Safety",
  },
  {
    id: 5,
    title: "Cost-effective Carpooling",
    description:
      "Sharing rides to save money and the environment.",
    image: "fifth.jpg",
    category: "Carpool",
  },
  {
    id: 6,
    title: "How Vramon Sathi Promotes Sustainable Travel",
    description:
      "Find out how Vramon Sathi supports eco-friendly and sustainable urban travel options.",
    image: "six.jpg",
    category: "Sustainability",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
          <button className="sm:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-600">
            Explore Vramon Sathi Blogs
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Stay updated on the latest trends, news, and features from Vramon Sathi.
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{blog.description}</p>
                  <span className="text-green-500 font-medium mt-4 block">
                    #{blog.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BlogsPage;
