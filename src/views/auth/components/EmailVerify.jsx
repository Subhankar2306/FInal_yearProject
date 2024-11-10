import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtpForProfileValidation, verifyOtpForProfileValidation } from '../../../store/user/userController';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetState } from '../../../store/user/userSlice';

function EmailVerify({ email , onClose = '' }) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  const dispatch = useDispatch();
  const { loading, user, message, status } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      dispatch(sendOtpForProfileValidation({ email }));
    }
   
  }, [email, dispatch]);

  useEffect(() => {
    if (status.sendOtp === 'success') {
      toast.success(message);
      setTimer(300); // Reset timer to 5 minutes when OTP is sent
      
    } else if (status.sendOtp === 'rejected') {
      toast.error(message);
    }

    if (status.verifyOtp === 'success') {
      toast.success(message);
      if(onClose){
        onClose();
        dispatch(resetState())
      }
      navigate('/profile');
    } else if (status.verifyOtp === 'rejected') {
      toast.error(message);
    }

    return ()=>{
      dispatch(resetState())
    }
  }, [status, message, navigate]);

  // Timer logic
  useEffect(() => {
    if (timer === 0) {
      toast.error("OTP expired. Please request a new one.");
      return;
    }
    
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      dispatch(verifyOtpForProfileValidation({ otp }));
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (loading.sendOtpLoading) {
    return <div className='w-full h-full flex justify-center items-center '>Loading...</div>;
  }

  return (
    <form className="signin-form flex flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-gray-600">Verify Your Account</h2>

      <input
        type="number"
        id="otp"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
        className="custom-input"
      />

      <button type="submit" className="submit-btn">
        {loading.verifyOtpLoading ? 'Loading...' : 'Verify'}
      </button>

      <p className="text-red-500">OTP expires in: {formatTime(timer)}</p>

      <div className="alternative-section">
        Already have an account?
        <Link to={"/sign-in"}>Sign In</Link>
      </div>
    </form>
  );
}

export default EmailVerify;
