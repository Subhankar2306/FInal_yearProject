// src/components/TransportCard.jsx
import React from "react";

const TransportCard = ({ name, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TransportCard;

