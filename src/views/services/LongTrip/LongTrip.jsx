import React from "react";
import { useNavigate } from "react-router-dom";
import TouristSpotCard from "./components/TouristSpotCard";
import touristSpots from "../../../assets/data/touristSpotsData";

const LongTripPage = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/long-trip/${id}`);
  };

  return (
    <div className="min-h-screen">
      <header className="py-5 px-6 bg-gray-800 shadow-xl rounded-b-md">
        <h1 className="text-center text-3xl font-bold text-white">
          Explore Tourist Destinations
        </h1>
        <p className="text-center text-xl mt-2 text-gray-300">
          Choose your next adventure
        </p>
      </header>
      <section className="p-6 max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {touristSpots.map((spot) => (
            <TouristSpotCard
              key={spot.id}
              spot={spot}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LongTripPage;
