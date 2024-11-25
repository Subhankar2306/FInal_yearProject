import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (

    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* About Section */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              Vraman Sathi is your trusted partner in discovering the world.
              Whether you’re planning your next vacation or seeking the best
              travel solutions, we’re here for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/cars"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>Email: info@vramansathi.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Travel Lane, Wanderlust City</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://x.com/"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
              <FaFacebook/>
              {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
            </a>
          </div>
          <p className="text-white text-sm text-center ">
            &copy; {new Date().getFullYear()} Vraman Sathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
