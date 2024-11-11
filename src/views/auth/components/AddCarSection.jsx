import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
// import { addCar } from './carSlice'; // import your addCar action

function AddCar() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [rate, setRate] = useState(0);
  const [area, setArea] = useState([]);
  const [areaName, setAreaName] = useState('');
  const [ carNumber , setCarNumber ] = useState('')

  // Handle file selection and generate a preview URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageURL(URL.createObjectURL(file)); // Set preview URL
    }
  };

  const handleAddArea = () => {
    if (areaName) {
      setArea([...area, { name: areaName }]);
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

    const formData = {
      name,
      image: { url: imageURL || undefined }, // use preview URL if available
      brand,
      rate,
      area,
      userId: 'user_id_here' // Replace with actual user ID
    };

    // Add logic to upload imageFile to Cloudinary or another image hosting service if needed
    // dispatch(addCar(formData));
    toast.success('Car added successfully');
  };

  return (
    <div className="add-car-container">
      <h2 className="form-title text-xl">Add Car Details</h2>
      <form onSubmit={handleSubmit} className="add-car-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Car Name"
          maxLength="60"
        />

        <input
          type="text"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Car Number"
          maxLength="60"
        />

        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="custom-input my-2"
          placeholder="Brand"
          maxLength="60"
        />

        {/* File input for image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="custom-input my-2"
        />
        
        {/* Display image preview */}
        {imageURL && (
          <img src={imageURL} alt="Image Preview" className="image-preview my-2 h-16 w-16" />
        )}

        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          min="0"
          className="custom-input my-2"
          placeholder="Rate"
        />

        <label> Areas Available </label>
        <div className="flex flex-wrap gap-3 mb-4">
          {area.map((location, index) => (
            <div key={index} className="flex items-center my-2 border rounded-full bg-gray-200 p-2 px-3 text-black">
              <p className="mr-2">{location.name}</p>
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
          className="submit-btn"
        >
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AddCar;
