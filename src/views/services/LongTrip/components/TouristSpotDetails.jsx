import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const TouristSpotDetails = ({ spots }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = spots.find((s) => s.id === parseInt(id));

  if (!spot) {
    return <p>Tourist spot not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
        {/* Back Button */}
        <div className="flex w-full justify-end items-center p-5 pb-0">

        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 bg-gray-700 text-white px-4 py-2 rounded-md mb-6 hover:bg-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        </div>
      {/* Header Section */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${spot.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{spot.name}</h1>
        </div>
      </div>

      <div className="p-6">

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-purple-700">{spot.name}</h2>
          <div className="flex items-center mt-2 text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>{spot.location || "Unknown Location"}</span>
          </div>
          <p className="text-gray-800 my-4 leading-relaxed">{spot.description}</p>

          {/* Packages Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-700">Packages:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {spot.packages.map((pkg, index) => (
                <div
                  key={index}
                  className="border rounded-lg shadow-md bg-gray-50 p-5 flex flex-col items-start"
                >
                  <h4 className="text-xl font-bold text-gray-800">{pkg.name}</h4>
                  <p className="text-gray-600 mt-2">{pkg.details}</p>
                  <div className="flex items-center mt-4">
                    <FaRupeeSign className="text-orange-600 mr-1" />
                    <span className="text-orange-600 font-bold">{pkg.price}</span>
                  </div>
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-600">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
