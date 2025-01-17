import React, { useState } from 'react'
import { FaCheckCircle, FaStar, FaTimesCircle } from 'react-icons/fa';

function VehicalItem({vehicle}) {
      const [selectedVehicle, setSelectedVehicle] = useState(null);
  return (
           <div
              key={vehicle.id}
              className={`bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                selectedVehicle?.id === vehicle.id ? 'ring-2 ring-blue-500' : ''
              } ${!vehicle.available ? 'opacity-60 cursor-not-allowed' : ''}`}
              onClick={() => vehicle.available && setSelectedVehicle(vehicle)}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{vehicle.name}</h3>
                <span className={`text-sm font-bold flex items-center ${
                  vehicle.available ? 'text-green-500' : 'text-red-500'
                }`}>
                  {vehicle.available ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                  {vehicle.available ? 'Available' : 'Not Available'}
                </span>
              </div>
              <p className="text-yellow-500 font-bold mb-1 flex items-center">
                <FaStar className="mr-1" /> {vehicle.rating.toFixed(1)}
              </p>
              <p className="text-gray-600 mb-2">{vehicle.description}</p>
              <p className="text-lg font-bold text-green-600">${vehicle.price} per hour</p>
            </div>
  )
}

export default VehicalItem;