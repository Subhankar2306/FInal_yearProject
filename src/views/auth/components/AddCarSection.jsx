import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import { createNewCar } from '../../../store/car/carController';
import { resetCarState } from '../../../store/car/carSlice';

function AddCar({ onDetails = '', onClose = '' }) {
  const dispatch = useDispatch();
  const { car, selectedCar, loading, message, status, error } = useSelector((state) => state.car);

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [rate, setRate] = useState(0);
  const [area, setArea] = useState([]);
  const [areaName, setAreaName] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('car');

  // Handle file selection and generate a preview URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddArea = () => {
    if (areaName) {
      setArea([...area, areaName]);
      setAreaName('');
    } else {
      toast.info('Area name is required');
    }
  };

  const handleDeleteArea = (index) => {
    const updatedArea = area.filter((_, i) => i !== index);
    setArea(updatedArea);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("image", imageFile);
    fromData.set("name", name);
    fromData.set("modelNumber", modelNumber);
    fromData.set("rate", rate);
    fromData.set("area", area);
    fromData.set("brand", brand);
    dispatch(createNewCar({ fromData }));
  };

  useEffect(() => {
    if (status.createNewCar === 'success') {
      toast.success(message);
      if (onDetails) {
        onDetails(selectedCar);
      }
      if (onClose) {
        onClose();
      }
    } else if (status.createNewCar === 'rejected') {
      toast.error(message);
    }

    return () => {
      dispatch(resetCarState());
    };
  }, [status.createNewCar, dispatch]);

  return (
    <div className="add-car-container">
      <h2 className="form-title text-2xl ">Add Car Details</h2>
      <form className="add-car-form">
        <label className="block my-2">
          Car Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="custom-input mt-1"
            placeholder="Car Name"
            maxLength="60"
          />
        </label>

        <label className="block my-2">
          Vehicle Type
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="custom-input mt-1"
          >
            {['car', 'bike', 'bus', 'truck', 'van', 'tractor', 'auto-rickshaw', 'jeep', 'cycle'].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block my-2">
          Model Number
          <input
            type="text"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            required
            className="custom-input mt-1"
            placeholder="Car Number"
            maxLength="60"
          />
        </label>

        <label className="block my-2">
          Brand
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="custom-input mt-1"
            placeholder="Brand"
            maxLength="60"
          />
        </label>

        <label className="block my-2">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="custom-input mt-1"
          />
        </label>

        {imageFile && (
          <img src={imageFile} alt="Image Preview" className="image-preview my-2 h-16 w-16" />
        )}

        <label className="block my-2">
          Rate
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            className="custom-input mt-1"
            placeholder="Rate"
          />
        </label>

        <label className="block my-2">
          Areas Available
          <div className="flex flex-wrap gap-3 mb-2">
            {area.map((location, index) => (
              <div
                key={index}
                className="flex items-center border rounded-full bg-gray-200 p-2 px-3 text-black"
              >
                <p className="mr-2">{location}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteArea(index)}
                  className="text-red-500 hover:underline"
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        </label>

        <div className="area-entry mb-4">
          <input
            type="text"
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
            placeholder="Area Name"
            className="custom-input my-2"
          />
          <button type="button" onClick={handleAddArea} className="submit-btn">
            Add Area
          </button>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="submit-btn"
          disabled={loading.createNewCarLoading}
        >
          {loading.createNewCarLoading ? 'Loading...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
}

export default AddCar;
