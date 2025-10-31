import React from 'react';


// Move this to a separate file later (e.g., data/cars.js)
const cars = [
  {
    id: 1,
    name: "Honda City 2020",
    image: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945",
    parts: [
      { name: "Front Bumper", description: "The front bumper is designed to absorb minor frontal impacts, house the grille, fog lights, and contribute to the vehicle's aerodynamics." },
      { name: "Rear Bumper", description: "Protects the rear of the vehicle from low-speed collisions and includes features like reflectors and license plate mounting." },
      { name: "Hood (Bonnet)", description: "Covers the engine compartment, providing protection from elements and easy access for maintenance." },
      { name: "Trunk Lid", description: "Provides access to the luggage compartment, with gas struts for easy opening and closing." },
      { name: "Fenders (Left & Right)", description: "Wheel arch panels that protect the sides from debris, mud, and minor impacts." },
      { name: "Doors (4 Doors)", description: "Provide secure entry and exit to the cabin, equipped with locks, windows, and weather seals." },
      { name: "Grille", description: "Front air intake grille allows airflow to the radiator for engine cooling and features the brand emblem." },
      { name: "Headlights", description: "LED or halogen lights for nighttime visibility, including high/low beams and DRLs." },
      { name: "Taillights", description: "Rear lights for braking, turning signals, and reverse indication." },
      { name: "Side Mirrors", description: "Adjustable mirrors for rear visibility, often with turn signals and heating." },
      { name: "Roof", description: "Provides overhead protection and can include sunroof options." },
      { name: "Quarter Panels", description: "Structural body panels located behind the rear doors, contributing to the vehicle's rigidity." }
    ]
  },
  {
    id: 2,
    name: "Honda Civic 2020",
    image: "https://s3.amazonaws.com/di-honda-enrollment/2020-civic-si-sedan/model-image-2020-civic-si-sedan-front.png",
    parts: [
      { name: "Front Bumper", description: "Sporty front bumper with integrated air vents for improved cooling and aggressive styling." },
      { name: "Rear Bumper", description: "Dynamic rear design with diffuser elements and exhaust outlets." },
      { name: "Hood (Bonnet)", description: "Sleek hood with power bulge for turbo engine access." },
      { name: "Trunk Lid", description: "Spacious trunk access with spoiler mounting points." },
      { name: "Fenders (Left & Right)", description: "Flared fenders accommodating larger wheels and tires." },
      { name: "Doors (4 Doors)", description: "Flush-fitting doors with frameless windows for coupe-like appearance." },
      { name: "Grille", description: "Honeycomb grille with LED accents for premium look." },
      { name: "Headlights", description: "Full LED headlights with adaptive features." },
      { name: "Taillights", description: "LED taillights with sequential turn signals." },
      { name: "Side Mirrors", description: "Body-colored mirrors with blind-spot monitoring." },
      { name: "Roof", description: "Panoramic sunroof available for open-air driving." },
      { name: "Quarter Panels", description: "Sculpted panels enhancing the sporty profile." }
    ]
  },
  {
    id: 3,
    name: "Toyota Corolla Grande 2018",
    image: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
    parts: [
      { name: "Front Bumper", description: "Elegant bumper with chrome accents and fog lamp housings." },
      { name: "Rear Bumper", description: "Integrated rear bumper with diffuser and chrome trim." },
      { name: "Hood (Bonnet)", description: "Smooth hood with subtle character lines." },
      { name: "Trunk Lid", description: "Spacious boot lid with integrated spoiler." },
      { name: "Fenders (Left & Right)", description: "Aerodynamic fenders matching the sedan's profile." },
      { name: "Doors (4 Doors)", description: "Premium doors with soft-close features." },
      { name: "Grille", description: "Bold chrome grille emblematic of Toyota luxury." },
      { name: "Headlights", description: "Projector headlights with LED daytime running lights." },
      { name: "Taillights", description: "LED taillamps spanning the trunk width." },
      { name: "Side Mirrors", description: "Power-folding mirrors with auto-dimming." },
      { name: "Roof", description: "Moonroof for enhanced cabin experience." },
      { name: "Quarter Panels", description: "Polished panels for refined aesthetics." }
    ]
  },
  {
    id: 4,
    name: "Suzuki Cultus 2020",
    image: "https://cache4.pakwheels.com/system/car_generation_pictures/6014/original/Suzuki_Cultus_-_PNG.png?1635945515",
    parts: [
      { name: "Front Bumper", description: "Compact bumper with integrated fog lamps for city driving." },
      { name: "Rear Bumper", description: "Simple rear bumper with reflectors for safety." },
      { name: "Hood (Bonnet)", description: "Lightweight hood for quick engine access." },
      { name: "Tailgate", description: "Hatchback tailgate for easy cargo loading." },
      { name: "Fenders (Left & Right)", description: "Durable fenders suited for urban roads." },
      { name: "Doors (5 Doors)", description: "Practical doors including rear hatch." },
      { name: "Grille", description: "Chrome-accented grille with Suzuki logo." },
      { name: "Headlights", description: "Halogen headlights with clear lenses." },
      { name: "Taillights", description: "Combined stop and tail lights." },
      { name: "Side Mirrors", description: "Manually adjustable side mirrors." },
      { name: "Roof Rails", description: "Optional roof rails for extra utility." },
      { name: "Quarter Panels", description: "Reinforced panels for hatchback design." }
    ]
  }
];
const Guarantee = () => {
  return (
   <section id='parts' className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-10 text-red-500">
          Car Body Parts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Car Image */}
              <div className="h-61 bg-gray-500">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found';
                  }}
                />
              </div>

              {/* Car Name */}
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {car.name}
                </h2>

                {/* Parts List */}
                {/* <ul className="space-y-3 text-sm text-gray-600">
                  {car.parts.map((part, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2 last:border-0">
                      <span className="font-medium text-gray-900">{part.name}:</span>{' '}
                      <span className="text-gray-600">{part.description}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;