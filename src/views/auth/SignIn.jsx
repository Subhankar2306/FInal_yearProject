import React, { useEffect, useState } from 'react';
import signUpImage from '../../assets/sign-in.webp'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/user/userController';
import { toast } from 'react-toastify';
import { resetState } from '../../store/user/userSlice';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { user , loading , message , status } = useSelector((state)=> state.user)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(email && password){
      dispatch(loginUser({email , password}))
    }  

  };
  
  useEffect(()=>{
    if(status.loginUser === 'success'){
        toast.success(message)
        navigate('/')
    } else if(status.loginUser === 'rejected'){
        toast.error(message)
    }
    return ()=>{
      dispatch(resetState())
    }

  }, [status])


  return (
    <div className='signin-main'>

    <div className="signin-container">
      {/* Left side image section */}
      <div className="signin-image">
        <img src={signUpImage} alt="Sign In" />
      </div>
      {/* Right side form section */}
      <div className="signin-form-container">
        <form  className="signin-form flex flex-col gap-3" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-gray-600">Sign in</h2>
          <div className="input-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn"> {loading.loginUserLoading? 'loading...':'continue' } </button>
          <div className='alternative-section'>
          Don't have an account? 
             <Link to={'/sign-up'}> sign up </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignIn;
