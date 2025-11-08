import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Address */}
          <div>
            <h2 className="mb-4 flex items-center justify-center md:justify-start text-lg font-semibold uppercase">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> Our Address
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white">I-10/4 Rahimia Autos</li>
              <li className="hover:text-white">Islamabad, Pakistan</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="mb-4 flex items-center justify-center md:justify-start text-lg font-semibold uppercase">
              <FaClock className="text-yellow-400 mr-2" /> Opening Hours
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white">Mon - Thu: 09:45 AM - 10:30 PM</li>
              <li className="hover:text-white">Sat - Sun: 09:45 AM - 10:30 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 flex items-center justify-center md:justify-start text-lg font-semibold uppercase">
              <FaPhoneAlt className="text-green-400 mr-2" /> Contact Us
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="tel:03316233334" className="hover:text-white">0331 6233334</a></li>
              <li><a href="tel:03215566160" className="hover:text-white">0321 5566160</a></li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2025 Rahimia Autos. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
