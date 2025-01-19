import React from "react";
import { FaTruck, FaRoute, FaCar, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

function ServiceType() {
  const services = [
    {
      type: "Ride",
      description: "Convenient vehicle rental services for your short-term needs.",
      icon: <FaCar className="text-4xl text-blue-500" />,
      link:"/ride-book"
    },
    {
        type: "Long Trip",
        description: "A fully planned traveling experience with beautiful locations.",
        icon: <FaRoute className="text-4xl text-green-500" />,
        link:"/long-trip"
      },
    {
      type: "Rental",
      description: "Reliable transport for goods and passengers.",
      icon: <FaTruck className="text-4xl text-red-500" />,
      link:"/car-rent"
    },
    {
      type: "Driver Booking",
      description: "Book reliable, experienced drivers for personal trips or goods transport with seamless and efficient service.",
      icon: <CgProfile className="text-4xl text-purple-500" />,
      link:"/custom"
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 mb-10">
          Explore our modern transport services tailored for your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              to={service.link}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.type}
              </h2>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceType;
