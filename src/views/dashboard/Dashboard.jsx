import React from 'react'
import RevenueChart from './components/RevenueChart'
import { useSelector } from 'react-redux'
import OwnerDashboard from './components/OwnerDashboard'
import CustomerDashboard from './components/CustomerDashboard'
import DriverDashboard from './components/DriverDashboard'
import AdminDashboard from './components/AdminDashboard'

function Dashboard() {
    const { user } = useSelector((state)=> state.user)

  return (
    <div>
        {
            user.role === "owner" ? 
            <OwnerDashboard/>
            :
            user.role === "customer" ?
            <CustomerDashboard/>
            :
            user.role === "driver" ?
            <DriverDashboard/>
            :
            <AdminDashboard/>

        }
    </div>
  )
}

export default Dashboard