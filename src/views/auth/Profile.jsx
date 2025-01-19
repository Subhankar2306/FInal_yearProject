import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import DriverReg from "./components/DriverReg";
import { authenticateUser, logoutUser } from "../../store/user/userController";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { resetState } from "../../store/user/userSlice";
import EmailVerify from "./components/EmailVerify";
import OwnerReg from "./components/OwnerReg";
import CustomerReg from "./components/CustomerReg";

// Assume these action creators exist in your Redux setup
// import { verifyAccount, updateProfile } from './userSlice'

function Profile() {
  const dispatch = useDispatch();
  const { user, loading, status, message, isAuthenticate } = useSelector(
    (state) => state.user
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const [isEmailVerify, setIsEmailVerify] = useState(false);

  const navigate = useNavigate();


  const formatDate = (dateString) => {
    //     return format(new Date(dateString), 'MMMM dd, yyyy')
    return dateString;
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(authenticateUser())
  }, []);

  useEffect(() => {
    if (status.logoutUser === "success") {
      toast.success(message);
      navigate("/");
    } else if (status.logoutUser === "rejected") {
      toast.error(message);
    }

    if (status.authenticateUser === "success") {
       
    } else if (status.authenticateUser === "rejected") {
      toast.error(message);
      navigate('/sign-in')
    }

    return () => {
      dispatch(resetState());
    };
  }, [status]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    // dispatch(updateProfile(editedUser))
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>

      <div className="flex justify-center mb-6">
        <img
          src={user.profile_pic?.url || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {!user.isProfileComplete && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-md">
          <p className="text-yellow-700">
            Your profile is incomplete. Please update your information.
          </p>
        </div>
      )}

      <div className="space-y-4 mt-4">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              aria-label="Name"
            />
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              aria-label="Email"
            />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        )}

        <div>
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
          <p>
            <span className="font-semibold">Joined:</span>{" "}
            {formatDate(user.createdAt)}
          </p>
          <p>
            <span className="font-semibold">Last Updated:</span>{" "}
            {formatDate(user.updatedAt)}
          </p>
        </div>

        <div>
          <p>
            <span className="font-semibold">Profile Status:</span>{" "}
            {user.isProfileComplete ? "Complete" : "Incomplete"}
          </p>
          <p>
            <span className="font-semibold">Verification Status:</span>{" "}
            {user.isVerify ? "Verified" : "Not Verified"}
          </p>
        </div>
      </div>

      <div className=" border border-gray-300 rounded-sm p-3">

     { !user.isProfileComplete && (user?.role === "customer" ? (
        <CustomerReg />
      ) : (user?.role === "driver" ? (
        <DriverReg />
      ) : (  user?.role === "owner" && <OwnerReg id={user._id} />
      )) )
    
    }

      </div>
     

      <div className="mt-6 space-x-4">
        {!user.isVerify && (
          <button
            onClick={() => setIsEmailVerify(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Verify Account
          </button>
        )}
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Edit Profile
          </button>
        )}
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          {loading.logoutUserLoading ? "loading..." : "Log Out"}
        </button>
      </div>

      {isEmailVerify && (
        <div className="popup-container ">
          <div className=" flex flex-col gap-4 bg-white rounded-md shadow-sm p-6 pt-4   ">
            <div
              onClick={() => setIsEmailVerify(false)}
              className="self-end cursor-pointer"
            >
              {" "}
              ❌{" "}
            </div>
            <EmailVerify
              email={user.email}
              onClose={() => setIsEmailVerify(false)}
            />
          </div>
        </div>
      )}

     
    </div>
  );
}

export default Profile;
