import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Assume this action creator exists in your Redux setup
// import { registerDriver } from './driverSlice'

function DriverReg() {
  const dispatch = useDispatch()
//   const { loading, error } = useSelector((state) => state.driver)

  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    typeOfCar: [{ name: '', experience: 0 }],
    isOwnCar: false,
    totalExperience: 0
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleCarTypeChange = (index, field, value) => {
    const newTypeOfCar = [...formData.typeOfCar]
    newTypeOfCar[index][field] = value
    setFormData(prevData => ({
      ...prevData,
      typeOfCar: newTypeOfCar
    }))
  }

  const addCarType = () => {
    setFormData(prevData => ({
      ...prevData,
      typeOfCar: [...prevData.typeOfCar, { name: '', experience: 0 }]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(registerDriver(formData))
  }

  return (
    <div className="driver-reg-container">
      <h2 className="form-title">Driver Registration</h2>
      <form onSubmit={handleSubmit} className="driver-reg-form">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength="10"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Type of Car</label>
          {formData.typeOfCar.map((car, index) => (
            <div key={index} className="car-type-entry">
              <input
                type="text"
                value={car.name}
                onChange={(e) => handleCarTypeChange(index, 'name', e.target.value)}
                placeholder="Car Name"
                className="form-input"
                maxLength="60"
                required
              />
              <input
                type="number"
                value={car.experience}
                onChange={(e) => handleCarTypeChange(index, 'experience', e.target.value)}
                placeholder="Experience (years)"
                className="form-input"
                min="0"
              />
            </div>
          ))}
          <button type="button" onClick={addCarType} className="add-car-btn">
            Add Another Car Type
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="isOwnCar" className="checkbox-label">
            <input
              type="checkbox"
              id="isOwnCar"
              name="isOwnCar"
              checked={formData.isOwnCar}
              onChange={handleChange}
              className="form-checkbox"
            />
            Do you own a car?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="totalExperience">Total Driving Experience (years)</label>
          <input
            type="number"
            id="totalExperience"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
            min="0"
            className="form-input"
          />
        </div>
        <button
          type="submit"
        //   disabled={loading}
          className="submit-btn"
        >
          {/* {loading ? 'Registering...' : 'Register as Driver'} */}
          Register
        </button>
      </form>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  )
}

export default DriverReg