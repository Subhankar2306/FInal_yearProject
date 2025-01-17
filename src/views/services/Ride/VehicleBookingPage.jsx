import React, { useState, useEffect } from 'react';
import { FaCar, FaMapMarkerAlt, FaStar, FaCheckCircle, FaTimesCircle, FaSearch } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import VehicalItem from './VehicalItem';

const VehicleBookingPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulating API call to fetch vehicles
    const fetchVehicles = () => {
      const mockVehicles = [
        { id: '1', name: 'Sedan', available: true, rating: 4.5, description: 'Comfortable 4-door car', price: 25 },
        { id: '2', name: 'SUV', available: true, rating: 4.2, description: 'Spacious vehicle for families', price: 35 },
        { id: '3', name: 'Hatchback', available: false, rating: 4.0, description: 'Compact and fuel-efficient', price: 20 },
        { id: '4', name: 'Luxury Car', available: true, rating: 4.8, description: 'Premium ride experience', price: 50 },
      ];
      setVehicles(mockVehicles);
    };

    fetchVehicles();
  }, []);

  const handleBookRide = () => {
    if (!currentLocation || !destination || !selectedVehicle) {
      setMessage('Please fill in all fields and select a vehicle.');
      return;
    }

    // Simulating booking process
    setMessage(`Your ride with ${selectedVehicle.name} has been booked!`);
    
    // Reset form
    setCurrentLocation('');
    setDestination('');
    setSelectedVehicle(null);

    // Update vehicle availability
    setVehicles(vehicles.map(v => 
      v.id === selectedVehicle.id ? {...v, available: false} : v
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center text-gray-800">
        <FaCar className="mr-2" /> Vehicle Booking System
      </h1>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Book a Ride</h2>
          <div className="mb-4 relative">
            <MdMyLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Current Location"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={handleBookRide}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <FaSearch className="mr-2" /> Find and Book Ride
          </button>
          {message && (
            <p className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
              {message}
            </p>
          )}
        </div>
        <div className="flex-2 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Available Vehicles</h2>
          {vehicles.map((vehicle) => (
            <VehicalItem vehicle={vehicle}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleBookingPage;

