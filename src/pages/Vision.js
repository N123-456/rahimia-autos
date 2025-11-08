// src/components/PartsGrid.jsx

import "react-responsive-carousel/lib/styles/carousel.min.css";


// src/components/PartsGrid.jsx
import React, { useState, useEffect } from "react";

const partImages = {
  "Front Bumper": [
    "https://pakcarz.com/cdn/shop/files/SuzukiCultusOldFrontBumper_1024x1024.png?v=1720749270",
    "https://cache2.pakwheels.com/ad_pictures/1934/suzuki-swift-new-front-bumper-replacement-2013-2016-19345171.jpg",
  "https://static3.webx.pk/files/67971/Images/1624801532-removebg-preview-67971-0-260823114847878.png",
"https://cache4.pakwheels.com/ad_pictures/2284/suzuki-mehran-new-shape-front-bumper-genuine-22842648.jpg",  
],
  "Rear Bumper": [
    "https://partex.com.pk/wp-content/uploads/2024/05/back-bumper-new-cultus.jpg",
    "https://partex.com.pk/wp-content/uploads/2024/05/Swift-old-bumper.jpg",
    "https://purchaser.com.pk/images/thumbnails/590/590/detailed/25/_272__71811B67LG0P5PK__1000_x_1000_pxl_.jpg.webp",
    "https://cache4.pakwheels.com/ad_pictures/2284/suzuki-mehran-old-shape-rear-bumper-22842443.jpg",
  ],
  "Hood (Bonnet)": [
    "https://partex.com.pk/wp-content/uploads/2023/03/57300B80EA0P000-img1.jpg.webp",
    "https://www.autopartssupply.com.au/assets/thumbL/SJE-20010.jpg?20210309102740",
    "https://boodmo.com/media/cache/catalog_part/images/family/8692608.webp",
    "https://partex.com.pk/wp-content/uploads/2023/03/57300B84P00P000-img1.jpg",
  ],
  "Trunk Lid": [
    "https://partex.com.pk/wp-content/uploads/2023/03/69100B71R00P000.jpg",
    "https://www.partsbit.de/sites/default/files/styles/588x457/public/carpartsphoto/goldstein/178593/66195171485081625.jpg",
    "https://www.partfinder.in/assets/theme/pf-main/images/banner/parts/boot-trunk-lid.webp",
    "https://partex.com.pk/wp-content/uploads/2023/03/69100B84320P000.jpg",
  ],
  "Fenders (Left & Right)": [
    "https://cdn.partfactory.com/images/fender.jpg",
    "https://cdn.partfactory.com/images/fender2.jpg",
  ],
  "Doors (4 Doors)": [
    "https://cdn.partfactory.com/images/door.jpg",
    "https://cdn.partfactory.com/images/door2.jpg",
  ],
  Grille: [
    "https://cdn.partfactory.com/images/grille.jpg",
    "https://cdn.partfactory.com/images/grille2.jpg",
  ],
  Headlights: [
    "https://cdn.partfactory.com/images/headlight.jpg",
    "https://cdn.partfactory.com/images/headlight2.jpg",
  ],
  Taillights: [
    "https://cdn.partfactory.com/images/taillight.jpg",
    "https://cdn.partfactory.com/images/taillight2.jpg",
  ],
  "Side Mirrors": [
    "https://cdn.partfactory.com/images/mirror.jpg",
    "https://cdn.partfactory.com/images/mirror2.jpg",
  ],
  "Roof (with Sunroof)": [
    "https://cdn.partfactory.com/images/roof.jpg",
    "https://cdn.partfactory.com/images/roof2.jpg",
  ],
  "Quarter Panels": [
    "https://cdn.partfactory.com/images/quarter-panel.jpg",
    "https://cdn.partfactory.com/images/quarter-panel2.jpg",
  ],
};

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

export default function PartsGrid({ selectedCar }) {
  return (
    <div className="max-w-7xl mx-auto p-4" id="body">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {selectedCar
          ? `${selectedCar.name} – Parts Catalog`
          : "Parts Catalog"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parts.map((part, index) => (
          <PartCard key={index} part={part} />
        ))}
      </div>
    </div>
  );
}

// ✅ Component for each part card
function PartCard({ part }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = partImages[part.name] || [
    "https://via.placeholder.com/400x250?text=Image+Not+Available",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-100 relative">
        <img
          src={images[currentImage]}
          alt={part.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentImage ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {part.name}
        </h3>
        <p className="text-xl font-bold text-red-500">{part.price}</p>
      </div>
    </div>
  );
}
