import React, { useEffect, useState } from 'react'

import { IoClose } from "react-icons/io5"
import { toast } from 'react-toastify'
import AddCar from './AddCarSection'
import { createDriverProfile } from '../../../store/driver/driverController'
import { resetDriverState } from '../../../store/driver/driverSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { registerDriver } from './driverSlice'

function DriverReg() {
  const dispatch = useDispatch()
  const { driver , error , message , loading , status } = useSelector((state)=> state.driver)

  // Individual state variables for each input field
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [typeOfCar, setTypeOfCar] = useState([])
  const [isOwnCar, setIsOwnCar] = useState(false)
  const [totalExperience, setTotalExperience] = useState(0)

  const [carName , setCarName ] = useState('')
  const [ drivingEx , setDrivingEx ] = useState(0)

  const handleAddCarType = () => {
    if(carName && drivingEx > 0){
      setTypeOfCar([...typeOfCar, { name: carName, experience: drivingEx }])

    }else{
      toast.info('Car name is required, and experience must be over 0 years')

    }
    setCarName('')
    setDrivingEx(0)
  }

  const handleCarTypeChange = (index, field, value) => {
    const updatedTypeOfCar = [...typeOfCar]
    updatedTypeOfCar[index][field] = value
    setTypeOfCar(updatedTypeOfCar)
  }

  const handleDeleteCarType = (index) => {
    const updatedTypeOfCar = typeOfCar.filter((_, i) => i !== index)
    setTypeOfCar(updatedTypeOfCar)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      address,
      phone,
      typeOfCar,
      isOwnCar,
      totalExperience ,
    }

    console.info(formData)
    dispatch(createDriverProfile(formData))
  }

  useEffect(() => {
    if (status.createDriverProfile === "success") {
      toast.success(message);
    } else if (status.createDriverProfile === "rejected") {
      toast.error(message);
    }

    return () => {
      dispatch(resetDriverState());
    };
  }, [status]);
  

  return (
    <div className="driver-reg-container">
      <h2 className="form-title text-xl"> Add Driver Details</h2>
      <form onSubmit={handleSubmit} className="driver-reg-form">
        
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Address -> like 123 Main St, Apartment 4B, Springfield, IL 62704"
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength="10"
          className="custom-input my-2"
          placeholder='Phone Number'
        />

        <label> Driving Experience </label>
        <div className="flex flex-wrap gap-3 added-car-types mb-4">
          {typeOfCar.map((car, index) => (
            <div key={index} className="flex items-center my-2 border rounded-full bg-gray-200 p-2 px-3 text-black">
              <p className="mr-2">{car.name} - {car.experience} years</p>
              <button
                type="button"
                onClick={() => handleDeleteCarType(index)}
                className="text-red-500 hover:underline"
              >
                <IoClose />
              </button>
            </div>
          ))}
        </div>

        <div className="car-type-entry mb-4">
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            placeholder="Car Name"
            className="custom-input my-2"
            maxLength="60"
           
          />
          <input
            type="number"
            value={drivingEx}
            onChange={(e) => setDrivingEx(e.target.value)}
            placeholder="Experience (years)"
            className="custom-input my-2"
            min="0"
          />
          <button type="button" onClick={handleAddCarType} className="submit-btn">
            Add Another Car Type
          </button>
        </div>

        <input
          type="checkbox"
          checked={isOwnCar}
          onChange={(e) => setIsOwnCar(e.target.checked)}
          className="form-checkbox mr-3 my-2"
        />
        Do you own a car?

        <input
          type="number"
          value={totalExperience}
          onChange={(e) => setTotalExperience(e.target.value)}
          min="0"
          className="custom-input my-2"
          placeholder="Total Experience"
        />

        <button
          type="submit"
          disabled={loading.createDriverProfileLoading }
          className="submit-btn"
        >
          { loading.createDriverProfileLoading ? 'loading...' : 'Register as Driver'}
          
        </button>
      </form>
      {/* {error && <p className="error-message">{error}</p>} */}
      {
        isOwnCar && (
          <div className="popup-container ">
          <div className=" flex flex-col gap-4 bg-white rounded-md shadow-sm p-6 pt-4 max-w-[500px] overflow-auto h-[90vh] ">
            <div
              onClick={() => setIsOwnCar(false)}
              className="self-end cursor-pointer"
            >
              {" "}
              ❌{" "}
            </div>
            <AddCar/>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default DriverReg
