import React, { useEffect, useState } from 'react'

import { IoClose } from "react-icons/io5"
import { toast } from 'react-toastify'
//import AddCar from './AddCarSection'
//import { createOwnerProfile } from '../../../store/owner/ownerController'
//import { resetOwnerState } from '../../../store/owner/ownerSlice'
import { useDispatch, useSelector } from 'react-redux'

function OwnerReg() {
  const dispatch = useDispatch()
  const { error, message, loading, status } = useSelector((state) => state.owner)

  const [userId, setUserId] = useState('') // for `user` field (ObjectId)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [vehicles, setVehicles] = useState([{ vehicleId: '', quantity: 0, available: 0 }])

  const handleAddVehicle = () => {
    setVehicles([...vehicles, { vehicleId: '', quantity: 0, available: 0 }])
  }

  const handleVehicleChange = (index, field, value) => {
    const updatedVehicles = [...vehicles]
    updatedVehicles[index][field] = value
    setVehicles(updatedVehicles)
  }

  const handleRemoveVehicle = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index)
    setVehicles(updatedVehicles)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      user: userId,
      contactInfo: {
        email,
        phone,
        address,
      },
      vehicles: vehicles.map((vehicle) => ({
        vehicle: vehicle.vehicleId,
        quantity: vehicle.quantity,
        available: vehicle.available,
      })),
    }

    dispatch(createOwnerProfile(formData))
  }

  React.useEffect(() => {
    if (status === "success") {
      toast.success(message)
    } else if (status === "error") {
      toast.error(error)
    }

    return () => {
      dispatch(resetOwnerState())
    }
  }, [status, message, error, dispatch])

  return (
    <div className="owner-reg-container">
      <h2 className="form-title text-xl">Register as Owner</h2>
      <form onSubmit={handleSubmit} className="owner-reg-form">

      {/*<input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="User ID"
        />*/}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Email"
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Phone Number"
        />

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="custom-input my-2"
          placeholder="Address"
        />

        <label>Vehicle Information</label>
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-entry mb-4 flex items-center gap-2">
            <input
              type="text"
              value={vehicle.vehicleId}
              onChange={(e) => handleVehicleChange(index, 'vehicleId', e.target.value)}
              placeholder="Vehicle ID"
              className="custom-input my-2"
            />
            <input
              type="number"
              value={vehicle.quantity}
              onChange={(e) => handleVehicleChange(index, 'quantity', e.target.value)}
              placeholder="Quantity"
              className="custom-input my-2"
              min="1"
            />
            <input
              type="number"
              value={vehicle.available}
              onChange={(e) => handleVehicleChange(index, 'available', e.target.value)}
              placeholder="Available"
              className="custom-input my-2"
              min="0"
            />
            <button type="button" onClick={() => handleRemoveVehicle(index)} className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddVehicle} className="add-vehicle-btn my-2">
          Add Another Vehicle
        </button>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Registering...' : 'Register as Owner'}
        </button>
      </form>
    </div>
  )
}

export default OwnerReg
