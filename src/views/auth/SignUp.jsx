import React, { useState } from 'react'
import signUpImage from '../../assets/sign-in.webp'
import { Link } from 'react-router-dom';

function SignUp() {
    const [name , setName] = useState('')
    const [confirmPass , setConfirmPass] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('confirm pass:', confirmPass);
      console.log('name:', name);
    };
  
    return (
      <div className='signin-main'>
  
      <div className="signin-container">
        {/* Left side image section */}
        <div className="signin-image">
          <img src={signUpImage} alt="Sign In" />
        </div>
        {/* Right side form section */}
        <div className="signin-form-container">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Enter your confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Sign In</button>

            <div className='alternative-section'>
            Already have an account?
             <Link to={'/sign-in'}>sign in</Link>
          </div>
          </form>
        </div>
      </div>
      </div>
    );
  }

export default SignUp

