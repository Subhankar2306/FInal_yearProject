import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Vramon Sathi</h1>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="cars">Cars</a></li>
          <li><a href="blogs">Blogs</a></li>
        <Link to={'/sign-in'} className={'sign-in-button'}> <button> Log in</button></Link>
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