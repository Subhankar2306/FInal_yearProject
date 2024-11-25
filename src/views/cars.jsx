import React from "react";
import Slider from "react-slick";

// Categories with personal images
const categories = [
  { id: 1, name: "Car", image: "/OIP.jpg", link: "/car" },
  { id: 2, name: "Bus", image: "/Cab.png", link: "/bus" },
  { id: 3, name: "Truck", image: "/Truck1.png", link: "/truck" },
  { id: 4, name: "Bike", image: "/Bike1.jpg", link: "/bike" },
  { id: 5, name: "Auto", image: "/Auto.png", link: "/auto" },
];



const sliderData = [
  {
    id: 1,
    image: "welcome.png",
    
  },
  {
    id: 2,
    image: "banner1.png",
    
  },
  {
    id: 3,
    image: "banner3.png",
   
  },
];



const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Categories Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Vehicle Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 container mx-auto px-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4">
              {/* Add anchor tag wrapping the image */}
              <a href={category.link}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-30 h-30 object-cover mx-auto mb-4 rounded-lg"
                />
              </a>
              <h3 className="text-gray-800 font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Slider Section */}
      <section className="relative">
        <Slider {...sliderSettings}>
          {sliderData.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[500px] object-cover"
              />
              
            </div>
          ))}
        </Slider>
      </section>

      
    </div>
  );
};

export default HomePage;
