import React from 'react';
import ChatBox from './ChatBox';
import Chart from './Chart';

const DriverDashboard = () => {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Earnings',
        data: [2000, 2500, 3000, 2200, 2700],
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Driver Dashboard</h1>
      <Chart data={performanceData} title="Earnings Performance" />
      <ChatBox role="Driver" userId="driver-789" />
    </div>
  );
};

export default DriverDashboard;
