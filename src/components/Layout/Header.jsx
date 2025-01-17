// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, isAuthenticate } = useSelector((state) => state.user);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   console.log(user, isAuthenticate);

//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>Vramon Sathi</h1>
//       </div>
//       <nav className={`nav ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about" className="">About</a>
//           </li>
//           <li>
//             <a href="/cars">Cars</a>
//           </li>
//           <li>
//             <a href="/blogs">Blogs</a>
//           </li>
//           {isAuthenticate ? (
//                 <Link to={'/profile'}>
//                   <img src={user?.profile_pic?.url} className="h-8 w-8 rounded-full  " />
//                 </Link>
//               ) : (
//                 <Link to={"/sign-in"} className={"sign-in-button"}>

//                 <button>
//                 Log in
//                 </button>
//               </Link>
//               )}

//         </ul>
//       </nav>
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgAddR, CgDetailsMore, CgProfile } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import {
  BiLogInCircle,
  BiHomeCircle,
  BiSolidDashboard,
  BiNews,
} from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user/userController";
import { resetState } from "../../store/user/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticate, status, loading, message } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // Handle status updates
  useEffect(() => {
    if (status.logoutUser === "success") {
      if (message) {
        toast.success(message);
      }
      dispatch(resetState());
    } else if (status.logoutUser === "rejected") {
      toast.error(message); // Show error message
    }
  }, [message, status]);

  return (
    <header className="sticky top-0 z-50 p-4 w-full flex justify-between items-center bg-white border border-gray-200 shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 ">
        Vramon Sathi <b className="text-[#ff6b6b] ">.</b>
      </h2>
      <nav className="flex items-center gap-4">
        {/* <button
          onClick={isAuthenticate ? handleLogout : () => navigate("/login")}
          className={`flex items-center font-semibold gap-2 px-4 py-2 rounded-full text-white transition-colors ${
            isAuthenticate
              ? "bg-[#ff6b6b] hover:bg-[#e05252]"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          {isAuthenticate ? "Logout" : "Login"} <BiLogInCircle />
        </button> */}

        {isAuthenticate ? (
          <Link to={"/profile"}>
            <img
              src={user?.profile_pic?.url}
              className="h-8 w-8 rounded-full  "
            />
          </Link>
        ) : (
          <Link to={"/sign-in"} 
          className={`flex items-center font-semibold gap-2 px-4 py-2 rounded-full text-white transition-colors bg-[#ff6b6b] hover:bg-[#e05252]
          `}
          >
            <button>Log in</button> <BiLogInCircle />
          </Link>
        )}

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          {menuOpen ? (
            <MdOutlineClose className="text-2xl text-gray-700" />
          ) : (
            <CgDetailsMore className="text-2xl text-gray-700" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-16 right-3 bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col gap-2 p-4 w-48">
          <NavLink to="/" onClick={toggleMenu} className="nav_links">
            <BiHomeCircle className="text-xl" /> Home
          </NavLink>
          <NavLink to="/profile" onClick={toggleMenu} className="nav_links">
            <CgProfile className="text-xl" /> About
          </NavLink>
          {/* <NavLink
            to="/profile"
            onClick={toggleMenu}
            className="nav_links"          >
            <CgAddR className="text-xl" /> Car
          </NavLink> */}
          <NavLink to="/profile" onClick={toggleMenu} className="nav_links">
            <BiNews className="text-xl" /> Blogs
          </NavLink>
          {isAuthenticate && (
            <NavLink to="/dashboard" onClick={toggleMenu} className="nav_links">
              <BiSolidDashboard className="text-xl" /> Dashboard
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
