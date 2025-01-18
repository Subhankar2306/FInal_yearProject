import React from 'react'

import { vehicles } from '../../../assets/data/vehicalData'
import { useNavigate, useParams } from 'react-router-dom'

function VehiclePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const vehicle = vehicles.find(v => v.id === parseInt(id))

  if (!vehicle) {
    return <div>Vehicle not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="container mx-auto px-4">
        <button 
          onClick={() => navigate("/car-rent")} 
          className="mb-4 text-blue-600 hover:underline"
        >
          &larr; Back to all vehicles
        </button>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={vehicle.image || "/placeholder.svg"} 
            alt={vehicle.name} 
            width={600} 
            height={400} 
            className="w-full object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
            <p className="text-xl text-gray-600 mb-4">${vehicle.price} per day</p>
            <p className="text-lg text-blue-600 mb-4 capitalize">Type: {vehicle.type}</p>
            <h2 className="text-2xl font-semibold mb-2">Features:</h2>
            <ul className="list-disc pl-5 mb-4">
              {vehicle.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Description:</h2>
            <p className="text-gray-700 mb-4">{vehicle.description}</p>
            <h2 className="text-2xl font-semibold mb-2">Rental Process:</h2>
            <ol className="list-decimal pl-5 mb-6">
              <li>Choose your rental dates</li>
              <li>Provide driver's information</li>
              <li>Select insurance options</li>
              <li>Confirm your booking</li>
              <li>Pick up your vehicle at our location</li>
            </ol>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
              Confirm Rental
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VehiclePage

