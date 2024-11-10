import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticate } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(user, isAuthenticate);

  return (
    <header className="header">
      <div className="logo">
        <h1>Vramon Sathi</h1>
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about" className="">About</a>
          </li>
          <li>
            <a href="/cars">Cars</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          {isAuthenticate ? (
                <Link to={'/profile'}>
                  <img src={user?.profile_pic?.url} className="h-8 w-8 rounded-full  " />
                </Link>
              ) : (
                <Link to={"/sign-in"} className={"sign-in-button"}>
             
                <button>
                Log in
                </button>
              </Link>
              )}
         
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
