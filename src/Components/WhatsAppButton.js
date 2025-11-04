import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/03316233334?text=Hello!%20Can%20I%20learn%20more%20about%20your%20business?" // Replace with your WhatsApp number
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 animate-pulse-slow"
      aria-label="Contact Rahimia Autos via WhatsApp"
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;