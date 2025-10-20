import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className=" flex flex-col items-center bg-white shadow-md border-b py-4 space-y-3 font-Outfit text-[15px] text-[#4A4A4A] transition-all duration-300 p-4 sticky top-0 z-50 shadow-lg animate-fade-in">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="./images/rahimia.png" 
            alt="Rahimia Autos Logo" 
            className="h-12 w-14 mr-4 transform hover:scale-105 transition-transform duration-300" 
            loading="lazy"
          />
          <h1 className="text-3xl font-extrabold tracking-tight">Rahimia Autos</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ">
          <li>
            <Link 
              to="/intro" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              onClick={(e) => handleLinkClick(e, 'intro')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              onClick={(e) => handleLinkClick(e, 'products')}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} items-center text-sm lg:text-[15px] font-Outfit text-[#4A4A4A] animate-slide-in`}>
        <ul className="flex flex-col items-center py-4">
          <li className="mb-2">
            <Link 
              to="/intro" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
              onClick={(e) => handleLinkClick(e, 'intro')}
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link 
              to="/products" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
              onClick={(e) => handleLinkClick(e, 'products')}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;