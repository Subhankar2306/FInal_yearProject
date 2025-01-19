
import React from 'react';
import ChatBox from './ChatBox';
import Chart from './Chart';


const CustomerDashboard = () => {
  const rideData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Rides',
        data: [5, 7, 4, 8, 10],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Customer Dashboard</h1>
      <Chart data={rideData} title="Ride Statistics" />
      <ChatBox role="Customer" userId="customer-456" />
    </div>
  );
};

export default CustomerDashboard;
