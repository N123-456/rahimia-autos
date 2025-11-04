import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Address */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">Our Address</h2>
            <ul className="space-y-2">
              <li>I-10/4 Rahimia Autos</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">Opening Hours</h2>
            <ul className="space-y-2">
              <li>Mon - Thu: 09:45 AM - 10:30 PM</li>
              <li>Sat - Sun: 09:45 AM - 10:30 PM</li>
            </ul>
          </div>

          {/* Contact / Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase">Contact Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
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
