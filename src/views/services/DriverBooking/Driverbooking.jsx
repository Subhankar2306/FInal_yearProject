import React, { useState } from 'react';

const transportOptions = ['Car', 'Van', 'Bus', 'Auto', 'Bike'];

const transportImages = {
  Car: 'https://autonexa.com/img/carSelling/banner.jpg',
  Van: 'https://www.merseyside-and-halton.veolia.co.uk/sites/g/files/dvc1821/files/image/2020/08/G31A7742.jpg',
  Bus: 'https://busbookingpro.com.au/images/busbooking/bus-booking.png',
  Auto: 'https://gumlet.assettype.com/swarajya/2023-03/640126c6-06aa-4182-a483-7732c4c33aa4/Screenshot_2023_03_24_at_11_55_15_AM.png?w=1200&auto=format%2Ccompress&ogImage=true',
  Bike: 'https://static.vecteezy.com/system/resources/previews/044/823/209/non_2x/trendy-bike-booking-vector.jpg',
};

function Driverbooking() {
  const [selectedType, setSelectedType] = useState('Car');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Info:', { ...formData, selectedType });
    alert(`Driver for ${selectedType} booked successfully!`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Dynamic Image */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto">
        <img
          src={transportImages[selectedType]}
          alt={selectedType}
          className="object-cover w-full h-full transition duration-500 ease-in-out"
        />
      </div>

      {/* Booking Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Book a {selectedType}</h2>

          {/* Transport Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {transportOptions.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  selectedType === type
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-3 border rounded"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="text"
              name="dropoffLocation"
              placeholder="Drop-off Location"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Driverbooking;
