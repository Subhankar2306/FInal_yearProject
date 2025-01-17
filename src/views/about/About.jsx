import React from "react";
import Background1Image from "../../assets/background.jpg";
import TruckImage from "../../assets/truck1.jpg";
import { FaCar, FaBus, FaTruck, FaMotorcycle, FaTaxi } from "react-icons/fa";


const iconMapping = {
  Car: <FaCar className="text-xl text-blue-600" />,
  Bus: <FaBus className="text-xl text-blue-600" />,
  Truck: <FaTruck className="text-xl text-blue-600" />,
  Bike: <FaMotorcycle className="text-xl text-blue-600" />,
  Auto: <FaTaxi className="text-xl text-blue-600" />,
};

function App() {
  const transportationTypes = [
    { name: "Car", description: "Personal vehicle for commuting." },
    { name: "Bus", description: "Affordable public transportation." },
    { name: "Truck", description: "For goods and cargo transportation." },
    { name: "Bike", description: "For quick and flexible rides." },
    { name: "Auto", description: "Three-wheeler for short-distance travel." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Background Image Section */}
      <div
        className="h-96 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${Background1Image})`,
        }}
      >
        {/* Optional content or overlay for background */}
      </div>

      {/* About Section */}
<div className="flex flex-wrap items-right mt-9">
  <div className="p-8 md:w-1/2">
    <h1 className="text-justify text-gray-800 text-xl leading-relaxed font-medium">
      "From everyday commutes to special trips, we offer a wide range of transportation services to meet your needs. Whether you're looking for quick, efficient bike rides, affordable carpooling options, or convenient shared cabs, we have you covered. Our goal is to provide reliable, safe, and budget-friendly transportation that fits your schedule and lifestyle."
    </h1>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src={TruckImage}
            alt="truck"
            className="w-[600px] h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
{/* Transportation Types Section */}
<div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-100 to-blue-50 rounded-md shadow-lg p-8 mt-4">


  <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Transportation Types</h1>
  <div className="flex flex-row items-center gap-4">
    {transportationTypes.map((transport) => (
      <div
        key={transport.name}
        className="bg-white rounded-lg p-4 flex items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        {/* Icon */}
        <div className="text-blue-600 text-3xl mr-4">
          {iconMapping[transport.name]}
        </div>
        {/* Text Content (Title and Description) */}
        <div className="text-left">
          <h2 className="text-lg font-semibold text-gray-700">
            {transport.name}
          </h2>
          <p className="text-sm text-gray-500">
            {transport.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  </div>


    
  );
}

export default App;
