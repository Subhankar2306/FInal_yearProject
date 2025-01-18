import React from 'react'

import { FaCar, FaUsers, FaCog, FaSnowflake, FaBluetooth } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


function VehicleCard({ vehicle }) {
 const navigate = useNavigate()

  const getIcon = (feature) => {
    switch (feature) {
      case '4 Seats':
      case '7 Seats':
      case '40 Seats':
        return <FaUsers className="mr-2" />
      case 'Automatic':
        return <FaCog className="mr-2" />
      case 'AC':
        return <FaSnowflake className="mr-2" />
      case 'Bluetooth':
        return <FaBluetooth className="mr-2" />
      default:
        return <FaCar className="mr-2" />
    }
  }

  const handleRentNow = () => {
    navigate(`/car-rent/${vehicle.id}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
      <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} width={300} height={200} className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
        <p className="text-gray-600 mb-1">${vehicle.price} per day</p>
        <p className="text-sm text-blue-600 mb-4 capitalize">Type: {vehicle.type}</p>
        <ul className="space-y-2 mb-4">
          {vehicle.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              {getIcon(feature)}
              {feature}
            </li>
          ))}
        </ul>
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={handleRentNow}
        >
          Rent Now
        </button>
      </div>
    </div>
  )
}

export default VehicleCard

