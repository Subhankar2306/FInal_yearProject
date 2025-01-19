import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import Chart from './Chart';
import axios from 'axios';
import { baseUrl } from '../../../App';
import AddCar from '../../auth/components/AddCarSection';

const OwnerDashboard = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCar, setNewCar] = useState({ model: '', registrationNumber: '', availability: true });
  const [isNewCarAdd , setIsNewCarAdd] = useState(false)
  const [revenueData, setRevenueData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Income',
        data: [12000, 15000, 10000, 18000, 20000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });
  const ownerId = 'owner-123'; // Replace with dynamic owner ID as needed

  useEffect(() => {
    fetchCars();
  }, []);

  // Fetch all cars based on owner ID
  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/owner/cars` , 
        {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true
      }
      );
      setCars(response.data.cars);
      console.log(response);
      
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle car availability
  const toggleAvailability = async (carId, currentStatus) => {
    try {
      await axios.patch(`/api/owner/car/${carId}/availability`, { availability: !currentStatus });
      fetchCars(); // Refresh cars
    } catch (error) {
      console.error('Error updating car availability:', error);
    }
  };

  // Add a new car
  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/owner/car/add`, { ...newCar, ownerId });
      setNewCar({ model: '', registrationNumber: '', availability: true }); // Reset form
      fetchCars(); // Refresh cars
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Owner Dashboard</h1>
      {/* Add New Car */}
      <div className='w-full flex justify-end items-center '>
           <button className='border-none bg-blue-600 px-5 py-3 text-white ' onClick={()=>{
             setIsNewCarAdd(true)
           }}>
               Add Car 
           </button>
      </div>
   

      {/* Cars List */}
      <div>
        <h2 className="text-xl font-semibold">My Cars</h2>
        {loading ? (
          <p>Loading cars...</p>
        ) : (
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Model Number</th>
                <th className="border border-gray-300 px-4 py-2">Availability</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id}>
                  <td className="border border-gray-300 px-4 py-2">{car.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{car.modelNumber}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {car.availability ? 'Active' : 'Inactive'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => toggleAvailability(car._id, car.availability)}
                      className={`px-3 py-1 rounded ${
                        car.availability ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                      }`}
                    >
                      {car.availability ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

         {/* Total Income Graph */}
         <Chart data={revenueData} title="Total Income Trends" />


       {/* add new car popup */}

       {/* Popup for Vehicle Details */}
      {isNewCarAdd && (
        <div className="popup-container">
          <div className="flex flex-col gap-4 bg-white rounded-md shadow-sm p-6 pt-4 max-w-[500px] overflow-auto h-[90vh]">
            <div onClick={() => setIsNewCarAdd(false)} className="self-end cursor-pointer">
              ❌
            </div>
            <AddCar onDetails={()=>{}} onClose={() => setIsNewCarAdd(false)} />
          </div>
        </div>
      )}
      

      {/* Chat Feature */}
      {/* <ChatBox role="Owner" userId={ownerId} /> */}
    </div>
  );
};

export default OwnerDashboard;
