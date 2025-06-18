// import React, { useState, useEffect } from 'react';
// import ChatBox from './ChatBox';
// import Chart from './Chart';
// import axios from 'axios';
// import { baseUrl } from '../../../App';
// import AddCar from '../../auth/components/AddCarSection';

// const OwnerDashboard = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newCar, setNewCar] = useState({ model: '', registrationNumber: '', availability: true });
//   const [isNewCarAdd , setIsNewCarAdd] = useState(false)
//   const [revenueData, setRevenueData] = useState({
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Total Income',
//         data: [12000, 15000, 10000, 18000, 20000],
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   });
//   const ownerId = 'owner-123'; // Replace with dynamic owner ID as needed

//   useEffect(() => {
//     fetchCars();
//   }, []);

//   // Fetch all cars based on owner ID
//   const fetchCars = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${baseUrl}/owner/cars` , 
//         {
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           withCredentials: true
//       }
//       );
//       setCars(response.data.cars);
//       console.log(response);
      
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Toggle car availability
//   const toggleAvailability = async (carId, currentStatus) => {
//     try {
//       await axios.patch(`/api/owner/car/${carId}/availability`, { availability: !currentStatus });
//       fetchCars(); // Refresh cars
//     } catch (error) {
//       console.error('Error updating car availability:', error);
//     }
//   };

//   // Add a new car
//   const handleAddCar = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`/api/owner/car/add`, { ...newCar, ownerId });
//       setNewCar({ model: '', registrationNumber: '', availability: true }); // Reset form
//       fetchCars(); // Refresh cars
//     } catch (error) {
//       console.error('Error adding car:', error);
//     }
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Owner Dashboard</h1>
//       {/* Add New Car */}
//       <div className='w-full flex justify-end items-center '>
//            <button className='border-none bg-blue-600 px-5 py-3 text-white ' onClick={()=>{
//              setIsNewCarAdd(true)
//            }}>
//                Add Car 
//            </button>
//       </div>
   

//       {/* Cars List */}
//       <div>
//         <h2 className="text-xl font-semibold">My Cars</h2>
//         {loading ? (
//           <p>Loading cars...</p>
//         ) : (
//           <table className="w-full mt-4 border-collapse border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Model Number</th>
//                 <th className="border border-gray-300 px-4 py-2">Availability</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cars.map((car) => (
//                 <tr key={car._id}>
//                   <td className="border border-gray-300 px-4 py-2">{car.name}</td>
//                   <td className="border border-gray-300 px-4 py-2">{car.modelNumber}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {car.availability ? 'Active' : 'Inactive'}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       onClick={() => toggleAvailability(car._id, car.availability)}
//                       className={`px-3 py-1 rounded ${
//                         car.availability ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
//                       }`}
//                     >
//                       {car.availability ? 'Deactivate' : 'Activate'}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//          {/* Total Income Graph */}
//          <Chart data={revenueData} title="Total Income Trends" />


//        {/* add new car popup */}

//        {/* Popup for Vehicle Details */}
//       {isNewCarAdd && (
//         <div className="popup-container">
//           <div className="flex flex-col gap-4 bg-white rounded-md shadow-sm p-6 pt-4 max-w-[500px] overflow-auto h-[90vh]">
//             <div onClick={() => setIsNewCarAdd(false)} className="self-end cursor-pointer">
//               ❌
//             </div>
//             <AddCar onDetails={()=>{}} onClose={() => setIsNewCarAdd(false)} />
//           </div>
//         </div>
//       )}
      

//       {/* Chat Feature */}
//       {/* <ChatBox role="Owner" userId={ownerId} /> */}
//     </div>
//   );
// };

// export default OwnerDashboard;



import { 
  Car, 
  DollarSign, 
  Calendar, 
  Star,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const OwnerDashboard = () => {
  const ownerStats = [
    { title: 'Total Vehicles', value: '8', icon: Car, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Active Bookings', value: '5', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Monthly Revenue', value: '$3,420', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' }
  ];

  const vehicles = [
    {
      id: 'V001',
      name: 'Toyota Camry',
      model: '2022',
      type: 'Sedan',
      status: 'booked',
      currentBooking: 'Downtown to Airport',
      dailyRate: '$80',
      totalEarnings: '$2,400',
      rating: 4.9,
      totalTrips: 30
    },
    {
      id: 'V002',
      name: 'Honda CR-V',
      model: '2023',
      type: 'SUV',
      status: 'available',
      currentBooking: null,
      dailyRate: '$120',
      totalEarnings: '$1,800',
      rating: 4.7,
      totalTrips: 15
    },
    {
      id: 'V003',
      name: 'BMW X5',
      model: '2022',
      type: 'Luxury SUV',
      status: 'maintenance',
      currentBooking: null,
      dailyRate: '$200',
      totalEarnings: '$4,200',
      rating: 4.8,
      totalTrips: 21
    },
    {
      id: 'V004',
      name: 'Ford Transit',
      model: '2021',
      type: 'Van',
      status: 'booked',
      currentBooking: 'Group Trip - 5 days',
      dailyRate: '$150',
      totalEarnings: '$3,000',
      rating: 4.6,
      totalTrips: 20
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      available: 'bg-green-100 text-green-800',
      booked: 'bg-blue-100 text-blue-800',
      maintenance: 'bg-red-100 text-red-800',
      inactive: 'bg-gray-100 text-gray-800'
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}>
        {status}
      </span>
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ownerStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vehicle Management */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Vehicle Fleet</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Vehicle</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Booking</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trips</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{vehicle.name}</div>
                      <div className="text-sm text-gray-500">{vehicle.model} • {vehicle.type}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(vehicle.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {vehicle.currentBooking || <span className="text-gray-400">No active booking</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vehicle.dailyRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{vehicle.totalEarnings}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{renderStars(vehicle.rating)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.totalTrips}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trend</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Revenue chart will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
