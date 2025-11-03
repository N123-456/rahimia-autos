// src/components/CarPartsPage.jsx
import React, { useState } from "react";
import PartsGrid from "./Vision";

const cars = [
  {
    id: 1,
    name: "Honda City 2020",
    image:
      "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945",
  },
  {
    id: 2,
    name: "Honda Civic 2020",
    image:
      "https://s3.amazonaws.com/di-honda-enrollment/2020-civic-si-sedan/model-image-2020-civic-si-sedan-front.png",
  },
  {
    id: 3,
    name: "Toyota Corolla Grande 2018",
    image:
      "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
  },
  {
    id: 4,
    name: "Suzuki Cultus 2020",
    image:
      "https://cache4.pakwheels.com/system/car_generation_pictures/6014/original/Suzuki_Cultus_-_PNG.png?1635945515",
  },
];

export default function CarPartsPage() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="py-12 px-4 bg-gray-50">
      {!selectedCar ? (
        <>
          <h3 className="text-4xl font-bold text-center mb-10 text-red-500">
            Car Body Parts
          </h3>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cars.map((car) => (
              <div
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-61 bg-gray-500">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {car.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setSelectedCar(null)}
            className="mb-6 px-6 py-2 bg-red-500 text-white rounded-md"
          >
            ← Back to Cars
          </button>

          {/* Show the Parts Grid */}
          <PartsGrid selectedCar={selectedCar} />
        </>
      )}
    </div>
  );
}
