
import { 
  Users, 
  Car, 
  DollarSign, 
  TrendingUp,
  Star,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const platformStats = [
    { title: 'Total Users', value: '2,847', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100', change: '+12%' },
    { title: 'Total Vehicles', value: '156', icon: Car, color: 'text-green-600', bg: 'bg-green-100', change: '+8%' },
    { title: 'Total Revenue', value: '$54,280', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-100', change: '+18%' },
    { title: 'Platform Rating', value: '4.8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100', change: '+0.2' }
  ];

  const topOwners = [
    { name: 'John Smith', vehicles: 12, revenue: '$8,540', rating: 4.9, trips: 156 },
    { name: 'Sarah Wilson', vehicles: 8, revenue: '$6,420', rating: 4.8, trips: 128 },
    { name: 'Mike Johnson', vehicles: 6, revenue: '$4,890', rating: 4.7, trips: 98 },
    { name: 'Lisa Davis', vehicles: 5, revenue: '$3,760', rating: 4.9, trips: 87 },
    { name: 'David Brown', vehicles: 4, revenue: '$2,980', rating: 4.6, trips: 72 }
  ];

  const topDrivers = [
    { name: 'Alex Thompson', trips: 89, revenue: '$2,670', rating: 4.9, hours: 156 },
    { name: 'Maria Garcia', trips: 76, revenue: '$2,280', rating: 4.8, hours: 142 },
    { name: 'James Wilson', trips: 68, revenue: '$2,040', rating: 4.7, hours: 128 },
    { name: 'Emma Johnson', trips: 62, revenue: '$1,860', rating: 4.9, hours: 118 },
    { name: 'Chris Lee', trips: 55, revenue: '$1,650', rating: 4.6, hours: 102 }
  ];

  const recentActivity = [
    { type: 'booking', message: 'New booking created by Alice Johnson', time: '2 min ago', status: 'success' },
    { type: 'payment', message: 'Payment of $45 processed successfully', time: '5 min ago', status: 'success' },
    { type: 'driver', message: 'New driver registration: Mike Smith', time: '10 min ago', status: 'info' },
    { type: 'vehicle', message: 'Vehicle added by Sarah Wilson', time: '15 min ago', status: 'info' },
    { type: 'issue', message: 'Support ticket created for booking #RB001', time: '20 min ago', status: 'warning' }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const getActivityIcon = (type) => {
    const icons = {
      booking: Car,
      payment: DollarSign,
      driver: Users,
      vehicle: Car,
      issue: Activity
    };
    const Icon = icons[type] || Activity;
    return <Icon className="h-4 w-4" />;
  };

  const getActivityColor = (status) => {
    const colors = {
      success: 'text-green-600 bg-green-100',
      info: 'text-blue-600 bg-blue-100',
      warning: 'text-orange-600 bg-orange-100',
      error: 'text-red-600 bg-red-100'
    };
    return colors[status] || colors.info;
  };

  return (
    <div className="space-y-6">
      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Car Owners */}
        <div className="bg-white rounded-lg shadow border">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Top Car Owners</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topOwners.map((owner, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{owner.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{owner.vehicles} vehicles</span>
                      <span>{owner.trips} trips</span>
                    </div>
                    {renderStars(owner.rating)}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{owner.revenue}</p>
                    <p className="text-sm text-gray-500">this month</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Drivers */}
        <div className="bg-white rounded-lg shadow border">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Top Drivers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topDrivers.map((driver, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{driver.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{driver.trips} trips</span>
                      <span>{driver.hours}h worked</span>
                    </div>
                    {renderStars(driver.rating)}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{driver.revenue}</p>
                    <p className="text-sm text-gray-500">this month</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Overview */}
        <div className="bg-white rounded-lg shadow border">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <BarChart3 className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <PieChart className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Revenue chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow border">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${getActivityColor(activity.status)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
