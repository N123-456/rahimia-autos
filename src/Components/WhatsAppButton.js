import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // optional but looks better

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923316233334?text=Hello!%20Can%20I%20learn%20more%20about%20your%20business?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-0 z-50  bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Contact Rahimia Autos via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
