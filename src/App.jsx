import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/contact';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate, // ✅ Added for redirection
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from './store/user/userController';
import './global.css';
import Profile from './views/auth/Profile';
import VehicleBookingPage from './views/services/Ride/VehicleBookingPage';
import RentalPage from './views/services/Rental/RentalPage';
import VehicalPage from './views/services/Rental/VehicalPage';
import LongTripPage from './views/services/LongTrip/LongTrip';
import TouristSpotDetails from './views/services/LongTrip/components/TouristSpotDetails';
import touristSpots from './assets/data/touristSpotsData';
import Dashboard from './views/dashboard/Dashboard';
import Driverbooking from './views/services/DriverBooking/Driverbooking';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  console.log('user data', user);

  return (
    <Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ride-book" element={<VehicleBookingPage />} />
          <Route path="/car-rent" element={<RentalPage />} />
          <Route path="/car-rent/:id" element={<VehicalPage />} />
          <Route path="/long-trip" element={<LongTripPage />} />
          <Route path="/long-trip/:id" element={<TouristSpotDetails spots={touristSpots} />} />
          <Route path="/driver-booking" element={<Driverbooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* ✅ Redirect from /custom to /driver-booking */}
        <Route path="/custom" element={<Navigate to="/driver-booking" />} />

        {/* 404 Page */}
        <Route
          path="/*"
          element={
            <div className="h-screen w-screen flex justify-center items-center text-2xl text-red-400">
              404 error
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// Base API URL
export const baseUrl = `http://localhost:8000/api/v1`;
