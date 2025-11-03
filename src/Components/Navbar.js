import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b font-Outfit">
      {/* ---------- Container ---------- */}
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* ---------- Header Row (Logo + Desktop Menu + Hamburger) ---------- */}
        <div className="flex items-center justify-between">

          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img
              src="./images/rahimia.png"
              alt="Rahimia Autos Logo"
              className="h-13 w-16 rounded-lg  transition-transform hover:scale-105"
              loading="lazy"
            />
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
              Rahimia Autos
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-[18px] text-[#4A4A4A]">
            {[
              { to: '/',     label: 'Home',          id: 'intro' },
              { to: '/products',  label: 'Products',      id: 'products' },
              { to: '/mission',   label: 'Mission & Vision', id: 'mission' },
              { to: '/parts',     label: 'Body Parts',    id: 'parts' },
              { to: '/contact',   label: 'Contact',       id: 'contact' },
            ].map(({ to, label, id }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-medium hover:text-black transition-colors duration-300 hover:scale-110 inline-block"
                  onClick={(e) => handleLinkClick(e, id)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* ---------- Mobile Menu (slides in) ---------- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-[15px] text-[#4A4A4A]">
            {[
              { to: '/intro',     label: 'Home',          id: 'intro' },
              { to: '/products',  label: 'Products',      id: 'products' },
              { to: '/mission',   label: 'Mission & Vision', id: 'mission' },
              { to: '/parts',     label: 'Body Parts',    id: 'parts' },
              { to: '/contact',   label: 'Contact',       id: 'contact' },
            ].map(({ to, label, id }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-medium hover:text-black transition-colors duration-300"
                  onClick={(e) => handleLinkClick(e, id)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;