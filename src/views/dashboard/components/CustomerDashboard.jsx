
// import React from 'react';
// import ChatBox from './ChatBox';
// import Chart from './Chart';


// const CustomerDashboard = () => {
//   const rideData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Rides',
//         data: [5, 7, 4, 8, 10],
//         borderColor: 'rgb(255, 99, 132)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Customer Dashboard</h1>
//       <Chart data={rideData} title="Ride Statistics" />
//       <ChatBox role="Customer" userId="customer-456" />
//     </div>
//   );
// };

// export default CustomerDashboard;


import { 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Download,
  Car,
  CreditCard
} from 'lucide-react';

const CustomerDashboard = () => {
  const customerStats = [
    { title: 'Total Rides', value: '24', icon: Car, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Completed', value: '20', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Pending', value: '2', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100' },
    { title: 'Total Spent', value: '$1,240', icon: CreditCard, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const recentBookings = [
    {
      id: 'RB001',
      date: '2024-06-15',
      from: 'Downtown Plaza',
      to: 'Airport Terminal',
      driver: 'Mike Johnson',
      vehicle: 'Toyota Camry',
      status: 'completed',
      amount: '$45',
      rating: 5
    },
    {
      id: 'RB002',
      date: '2024-06-14',
      from: 'Mall Center',
      to: 'Hotel Grand',
      driver: 'Sarah Wilson',
      vehicle: 'Honda Civic',
      status: 'completed',
      amount: '$32',
      rating: 4
    },
    {
      id: 'RB003',
      date: '2024-06-13',
      from: 'Office Complex',
      to: 'Residential Area',
      driver: 'David Brown',
      vehicle: 'Nissan Altima',
      status: 'pending',
      amount: '$28',
      rating: null
    },
    {
      id: 'RB004',
      date: '2024-06-12',
      from: 'Train Station',
      to: 'University Campus',
      driver: 'Lisa Davis',
      vehicle: 'Ford Focus',
      status: 'cancelled',
      amount: '$0',
      rating: null
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-orange-100 text-orange-800',
      cancelled: 'bg-red-100 text-red-800',
      ongoing: 'bg-blue-100 text-blue-800'
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="text-gray-400">Not rated</span>;
    
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
        {customerStats.map((stat, index) => (
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

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span>{booking.from}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span>{booking.to}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.driver}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.vehicle}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(booking.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{renderStars(booking.rating)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {booking.status === 'completed' && (
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                        <Download className="h-4 w-4" />
                        <span>Invoice</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
