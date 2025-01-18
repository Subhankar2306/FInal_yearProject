import React from 'react'
import VehicleList from './components/VehicleList'



function RentalPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in-down">Vehicle Rentals</h1>
        <p className="text-center text-gray-600 mb-8 animate-fade-in-down" style={{ animationDelay: '200ms' }}>
          Choose from our wide variety of vehicles for your next adventure!
        </p>
        <VehicleList />
      </main>
    </div>
  )
}

export default RentalPage

