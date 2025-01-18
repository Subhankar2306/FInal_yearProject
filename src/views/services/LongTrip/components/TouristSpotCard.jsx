import React from "react";

const TouristSpotCard = ({ spot, onDetailsClick }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 transition transform hover:scale-105 hover:shadow-2xl">
    <img
      src={spot.image}
      alt={spot.name}
      className="w-full h-40 object-cover rounded-md mb-3"
    />
    <h3 className="text-xl font-bold mb-2 text-purple-700">{spot.name}</h3>
    <p className="text-sm text-gray-700 mb-2">{spot.shortDescription}</p>

    <div className="flex justify-between items-center mt-3">
      <button
        onClick={() => onDetailsClick(spot.id)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200"
      >
        More Details
      </button>
      <p className="text-orange-600 font-semibold">Starting at {spot.price}</p>
    </div>
  </div>
);

export default TouristSpotCard;
