// import React from 'react'
// import RevenueChart from './components/RevenueChart'
// import { useSelector } from 'react-redux'
// import OwnerDashboard from './components/OwnerDashboard'
// import CustomerDashboard from './components/CustomerDashboard'
// import DriverDashboard from './components/DriverDashboard'
// import AdminDashboard from './components/AdminDashboard'

// function Dashboard() {
//     const { user } = useSelector((state)=> state.user)

//   return (
//     <div>
//         {
//             user.role === "owner" ? 
//             <OwnerDashboard/>
//             :
//             user.role === "customer" ?
//             <CustomerDashboard/>
//             :
//             user.role === "driver" ?
//             <DriverDashboard/>
//             :
//             <AdminDashboard/>

//         }
//     </div>
//   )
// }

// export default Dashboard



import { useState } from 'react';
import { 
  Car, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  MapPin,
  Clock,
  Star,
  Settings,
  LogOut
} from 'lucide-react';
import CustomerDashboard from './components/CustomerDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import DriverDashboard from './components/DriverDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';


const Dashboard = () => {
  const [currentRole, setCurrentRole] = useState('customer');
  const [user] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer',
    avatar: '👤'
  });

  const roles = [
    { id: 'customer', name: 'Customer', icon: Users, color: 'bg-blue-500' },
    { id: 'owner', name: 'Car Owner', icon: Car, color: 'bg-green-500' },
    { id: 'driver', name: 'Driver', icon: MapPin, color: 'bg-orange-500' },
    { id: 'superadmin', name: 'Super Admin', icon: Settings, color: 'bg-purple-500' }
  ];

  const handleRoleSwitch = (roleId) => {
    setCurrentRole(roleId);
  };

  const renderDashboardContent = () => {
    switch (currentRole) {
      case 'customer':
        return <CustomerDashboard/>;
      case 'owner':
        return <OwnerDashboard />;
      case 'driver':
        return <DriverDashboard />;
      case 'superadmin':
        return <SuperAdminDashboard />;
      default:
        return <CustomerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">RideEase</span>
              </div>
              <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full border">
                Admin Panel
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {user.name}
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Role Switcher */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="flex flex-wrap gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSwitch(role.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                  currentRole === role.id 
                    ? `${role.color} text-white shadow-lg` 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <role.icon className="h-4 w-4" />
                <span>{role.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-6">
          {renderDashboardContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
