// src/components/PartsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
const carImage =
  "https://s3.amazonaws.com/di-honda-enrollment/2020-civic-si-sedan/model-image-2020-civic-si-sedan-front.png";

const parts = [
  { name: "Front Bumper", price: "$450" },
  { name: "Rear Bumper", price: "$420" },
  { name: "Hood (Bonnet)", price: "$680" },
  { name: "Trunk Lid", price: "$380" },
  { name: "Fenders (Left & Right)", price: "$290 each" },
  { name: "Doors (4 Doors)", price: "$720 each" },
  { name: "Grille", price: "$180" },
  { name: "Headlights", price: "$550 pair" },
  { name: "Taillights", price: "$480 pair" },
  { name: "Side Mirrors", price: "$210 each" },
  { name: "Roof (with Sunroof)", price: "$1,200" },
  { name: "Quarter Panels", price: "$350 each" },
];

export default function PartsGrid() {
  return (
    <div className="max-w-7xl mx-auto p-4" >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Honda Civic 2020 – Parts Catalog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="body">
        
        {parts.map((part, index) => (
         
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="h-48 bg-gray-100">
              <img
                src={carImage}
                alt={part.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {part.name}
              </h3>
              <p className="text-xl font-bold text-red-500">
                {part.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}