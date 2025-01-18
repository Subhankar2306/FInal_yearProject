import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Luxury Sedan",
    type: "Car",
    image: "sedan.jpg",
    rate: "$150 per day",
    description: "Comfortable and stylish sedan for a smooth long-distance journey.",
    features: ["Leather seats", "Bluetooth", "Air conditioning"],
  },
  {
    id: 2,
    name: "SUV",
    type: "Car",
    image: "suv.jpg",
    rate: "$200 per day",
    description: "Spacious and powerful SUV for rugged terrains and comfort.",
    features: ["4x4 drive", "Spacious interior", "GPS Navigation"],
  },
  {
    id: 3,
    name: "Mini Bus",
    type: "Van",
    image: "minibus.jpg",
    rate: "$300 per day",
    description: "Ideal for large groups, this mini bus offers ample space.",
    features: ["Seating for 15+", "Large storage space", "Air conditioning"],
  },
  {
    id: 4,
    name: "Luxury Bus",
    type: "Bus",
    image: "luxbus.jpg",
    rate: "$500 per day",
    description: "Experience luxury on the road with reclining seats and amenities.",
    features: ["Reclining seats", "Wi-Fi", "Onboard snacks"],
  },
];

const VehicleCard = ({ vehicle }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 transition transform hover:scale-105 hover:shadow-2xl">
    <img
      src={vehicle.image}
      alt={vehicle.name}
      className="w-full h-36 object-cover rounded-md mb-3"
    />
    <h3 className="text-2xl font-semibold mb-2 text-purple-700">{vehicle.name}</h3>
    <p className="text-sm text-gray-800 mb-2">{vehicle.description}</p>
    <p className="text-xl font-bold text-orange-700 mb-3">{vehicle.rate}</p>

    <h4 className="text-md font-semibold text-gray-700 mb-2">Features:</h4>
    <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
      {vehicle.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>

    <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-orange-700 transition duration-200">
      Book Now
    </button>
  </div>
);

const LongTripPage = () => {
    return (
      <div className="min-h-screen">
        {/* Header with Solid Color */}
        <header className="py-5 px-6 bg-gray-800 shadow-xl rounded-b-md transform transition duration-500 hover:scale-105">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide text-white animate__animated animate__fadeIn">
            Your Next Adventure Begins Here
          </h1>
          <p className="text-center text-2xl mt-4 font-semibold tracking-wide text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            Explore new places and make unforgettable memories
          </p>
      </header>

      {/* Vehicle Options Section */}
      <section className="p-6 max-w-7xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Available Vehicles for Your Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default LongTripPage;
