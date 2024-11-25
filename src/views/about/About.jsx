import React from 'react'
import carImage from '../../assets/car.jpg'
import busImage from '../../assets/bus.jpg'
import bikeImage from '../../assets/bike.jpg'
import autoImage from '../../assets/auto.jpeg'
import truckImage from '../../assets/truck.jpg'


function About() {
  return (
    
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">About Our Transportation System</h1>
        <p className="mt-2 text-xl text-gray-600">We offer a variety of transportation options for all your travel needs.</p>
      </header>

      {/* Transportation Modes Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Transportation Options</h2>
        <div className="flex flex-wrap justify-center gap-6">
          
          {/* Car Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={carImage} alt="Car"className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Car</h3>
            <p className="text-gray-600">Fast and comfortable, perfect for short and long journeys with flexibility.</p>
          </div>

          {/* Bus Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={busImage}alt="bus"className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bus</h3>
            <p className="text-gray-600">Affordable and eco-friendly, buses are a reliable option for both short and long distances.</p>
          </div>

          {/* Bike Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={bikeImage} alt="bike"className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bike</h3>
            <p className="text-gray-600">Eco-friendly and fast, bikes are ideal for short commutes and urban exploration.</p>
          </div>

          {/* Auto Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={autoImage} alt="auto"className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Auto</h3>
            <p className="text-gray-600">Convenient and affordable, auto-rickshaws are perfect for short trips around the city.</p>
          </div>

          {/* Truck Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={truckImage} alt="truck"className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Truck</h3>
            <p className="text-gray-600">Heavy-duty and reliable, trucks are ideal for transporting goods across long distances.</p>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-10 bg-gray-800 text-white py-4">
        <p>&copy; 2024 Our Transportation System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

  


export default About