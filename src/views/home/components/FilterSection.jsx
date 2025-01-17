import React, { useState } from 'react';
import axios from 'axios';

function FilterSection() {
  const vehicleTypes = [
    'car', 'bike', 'bus', 'truck', 'van', 'tractor', 'auto-rickshaw', 'jeep', 'cycle',
  ];

  const [selectedType, setSelectedType] = useState('');

  const handleFilterClick = async (type) => {
    setSelectedType(type);
    try {
      const response = await axios.get(`/api/vehicles?type=${type}`);
      console.log('Filtered Data:', response.data);
      // Handle the filtered data (e.g., update state, display results, etc.)
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-4">Filter by Vehicle Type</h2>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-nowrap justify-center items-center gap-4">
          {vehicleTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleFilterClick(type)}
              className={`px-4 py-2 rounded  transition-all duration-200 ${
                selectedType === type
                  ? 'bg-gray-200 '
                  : 'bg-transparent  hover:bg-gray-200'
              }`}
            >
              <div className="flex flex-col  min-w-24 min-h-24 justify-center items-center gap-2">
                <img
                  src={`/src/assets/images/${type}.png`}  // Use a correct path
                  alt={type}
                  className="w-20 h-20 rounded-full border border-gray-500 bg-center"
                />
                <span className="capitalize">{type}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
