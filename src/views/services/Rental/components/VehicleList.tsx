import React from 'react'
import VehicleCard from "../components/VehicleCard"
import { vehicles } from '../../../../assets/data/vehicalData'


function VehicleList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {vehicles.map((vehicle, index) => (
        <div key={vehicle.id} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 150}ms` }}>
          <VehicleCard vehicle={vehicle} />
        </div>
      ))}
    </div>
  )
}

export default VehicleList

