// import React from 'react';
// import ChatBox from './ChatBox';
// import Chart from './Chart';

// const DriverDashboard = () => {
//   const performanceData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Earnings',
//         data: [2000, 2500, 3000, 2200, 2700],
//         borderColor: 'rgb(54, 162, 235)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Driver Dashboard</h1>
//       <Chart data={performanceData} title="Earnings Performance" />
//       <ChatBox role="Driver" userId="driver-789" />
//     </div>
//   );
// };

// export default DriverDashboard;


import { 
  Car, 
  DollarSign, 
  Clock, 
  Star,
  MapPin,
  CheckCircle,
  XCircle,
  Navigation
} from 'lucide-react';

const DriverDashboard = () => {
  const driverStats = [
    { title: 'Total Trips', value: '156', icon: Car, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'This Month', value: '24', icon: Clock, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Total Earnings', value: '$4,680', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Rating', value: '4.9', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' }
  ];

  const currentTrips = [
    {
      id: 'T001',
      status: 'active',
      customer: 'Alice Johnson',
      pickup: 'Downtown Plaza',
      dropoff: 'Airport Terminal',
      distance: '15.2 km',
      estimatedTime: '22 min',
      fare: '$35',
      startTime: '10:30 AM'
    },
    {
      id: 'T002',
      status: 'pending',
      customer: 'Bob Smith',
      pickup: 'Hotel Grand',
      dropoff: 'Shopping Mall',
      distance: '8.5 km',
      estimatedTime: '18 min',
      fare: '$20',
      startTime: '11:15 AM'
    }
  ];

  const recentTrips = [
    {
      id: 'T003',
      date: '2024-06-15',
      customer: 'Sarah Wilson',
      route: 'Office Complex → Residential Area',
      duration: '25 min',
      distance: '12.3 km',
      fare: '$28',
      rating: 5,
      status: 'completed'
    },
    {
      id: 'T004',
      date: '2024-06-15',
      customer: 'Mike Davis',
      route: 'Train Station → University',
      duration: '18 min',
      distance: '9.2 km',
      fare: '$22',
      rating: 4,
      status: 'completed'
    },
    {
      id: 'T005',
      date: '2024-06-14',
      customer: 'Lisa Brown',
      route: 'Mall Center → Business District',
      duration: '30 min',
      distance: '16.8 km',
      fare: '$38',
      rating: 5,
      status: 'completed'
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-orange-100 text-orange-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
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
        {driverStats.map((stat, index) => (
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

      {/* Current Trips */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Current Trips</h3>
        </div>
        <div className="p-6">
          {currentTrips.length > 0 ? (
            <div className="space-y-4">
              {currentTrips.map((trip) => (
                <div key={trip.id} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{trip.customer}</h4>
                        {getStatusBadge(trip.status)}
                      </div>
                      <p className="text-sm text-gray-500">Trip ID: {trip.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg text-gray-900">{trip.fare}</p>
                      <p className="text-sm text-gray-500">{trip.startTime}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-900">{trip.pickup}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-900">{trip.dropoff}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{trip.distance}</span>
                    <span>{trip.estimatedTime}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    {trip.status === 'pending' && (
                      <>
                        <button className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                          <CheckCircle className="h-4 w-4" />
                          <span>Accept</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                          <XCircle className="h-4 w-4" />
                          <span>Decline</span>
                        </button>
                      </>
                    )}
                    {trip.status === 'active' && (
                      <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        <Navigation className="h-4 w-4" />
                        <span>Navigate</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No current trips</p>
          )}
        </div>
      </div>

      {/* Recent Trips */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Recent Trips</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTrips.map((trip) => (
                <tr key={trip.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trip.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trip.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{trip.route}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.distance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trip.fare}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{renderStars(trip.rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
