import React, { useEffect, useState } from "react";
import signUpImage from "../../assets/sign-in.webp";
// import signUpImage from '../../assets/reg_car.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { regUser } from "../../store/user/userController";
import { toast } from "react-toastify";
import EmailVerify from "./components/EmailVerify";
import { resetState } from "../../store/user/userSlice";
import UserType from "./components/UserType";

function SignUp() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [ isVerify , setIsVerify ] = useState(false)

  const dispatch = useDispatch()
  const {  loading , user, isAuthenticate , status , error , message } = useSelector((state)=> state.user)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regUser({name , role , email , password}))
  };

  useEffect(()=>{
     if(message ){
      if(status.regUser === 'success'){
        toast.success(message)
        dispatch(resetState())
      } else if(status.regUser === 'rejected'){
        toast.error(message)
      }
     }
  }, [message , status])


  useEffect(()=>{
    if (Object.keys(user).length > 0 && !user.isVerify) {
      setIsVerify(true);
    }
      return()=>{
        setIsVerify(false)
      }
  } , [user])

  console.log('log is verify' , isVerify , status , loading , user);
  

  return (
    <div className="signin-main">
      <div className="signin-container">
        {/* Left side image section */}
        <div className="signin-image">
          <img src={signUpImage} alt="Sign In" />
        </div>
        {/* Right side form section */}
        <div className="signin-form-container">
          

        {
          !role? <UserType onType={(type)=>setRole(type)}/>:

          !isVerify ?(

            <form className="signin-form flex flex-col gap-3" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-gray-600">Sign Up</h2>

           
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="custom-input"
              />
           
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="custom-input"
              />
           
           
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="custom-input"
              />
       
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
                className="custom-input"
              />
         

            <button type="submit" className="submit-btn">
            { loading.regUserLoading ? 'loading ... ': 'Submit' }
            </button>

            <div className="alternative-section">
              Already have an account?
              <Link to={"/sign-in"}>Sign In</Link>
            </div>
          </form>
          ) : 
          (
            <EmailVerify email={user?.email}/>
          )
        }

        </div>
        {/* <UserType/> */}
      </div>
    </div>
  );
}

export default SignUp;
