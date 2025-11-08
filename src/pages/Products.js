import React from 'react';

const products = [
  {
    id: 1,
    title: 'Front Bumper',
    description: 'A front bumper is a protective and aesthetic bar at the front of a vehicle that absorbs impact in minor collisions, protecting more critical components and the vehicles body from damage',
    image: 'https://partex.com.pk/wp-content/uploads/2023/09/Front-Bumper-Wagon-R.jpg',
    alt: 'Rahimia Autos Diesel Engine Piston'
  },
  {
    id: 2,
    title: 'Rear Bumper',
    description: 'A rear bumper is a protective bar on the back of a vehicle designed to reduce or prevent damage in low-speed collisions and protect components like the trunk, fuel tank, and taillights.',
    image: 'https://partex.com.pk/wp-content/uploads/2024/05/Swift-old-bumper.jpg',
    alt: 'Rahimia Autos Piston Ring for Diesel Engines'
  },
  {
    id: 3,
    title: 'Hood (Bonnet)',
    description: 'A cars hood (or bonnet) is the hinged cover over the engine compartment that protects its components from the elements, debris, and the public. It also contributes to the vehicles aerodynamics, aesthetics, and noise reduction. ',
    image: 'https://partex.com.pk/wp-content/uploads/2023/03/57300B84M11P000-img1.jpg.webp',
    alt: 'Rahimia Autos Cylinder Liner for Trucks and Tractors'
  },
  {
    id: 4,
    title: 'Fenders (Left & Right)',
    description: 'Fenders are the panels that frame a vehicle\'s wheel wells, protecting the wheels and suspension components from road debris, mud, and water. They also contribute to the vehicle\'s aerodynamics and overall aesthetic appeal. Fenders are typically made from materials like steel, aluminum, or plastic and are designed to withstand minor impacts while maintaining their shape and function.',
    image: 'https://partex.com.pk/wp-content/uploads/2023/09/Fender-Right-Side-Swift.jpg',
    alt: 'Rahimia Autos Engine Valve and Seat'
  },
  {
    id: 5,
    title: 'Grille',
    description: 'A cars front grille is a slotted or mesh panel located at the front of the vehicle, typically between the headlights, that serves two main purposes: cooling and protection. It allows air to flow into the engine compartment to cool the radiator and engine while also acting as a barrier against road debris like rocks and leaves.',
    image: 'https://partsdirect.pk/cdn/shop/products/y4mE6_QlAExYLd6appPk3P0wDEYYzcJFqIJvoj_8yNiiprhIHk4De-aw20WYeDHHlwhpymvYwbapNZgfJ1OeHxSuS9XrLsV97LLdPfexNlRsOGnwfDM8Cz75p3s29JxnOAbKjBdyEC7SkGgEuS_ffMXpTZ5HA9TiOguXvtOWtvA6i6kek9seRv7_7666788d-1c55-4138-927a-f680fce05d83.jpg?v=1698400602',
    alt: 'Rahimia Autos Engine Bearings for Diesel Engines'
  },
  {
    id: 6,
    title: 'Headlight',
    description: 'Headlights are lights mounted on the front of a vehicle to illuminate the road ahead, improving safety by helping the driver see at night or in poor visibility. They are considered a critical safety feature, as a significant number of fatal accidents occur in the dark.',
    image: 'https://partex.com.pk/wp-content/uploads/2023/08/Headlight-Civic.jpg',
    alt: 'Rahimia Autos Engine Gaskets for Trucks and Buses'
  },
  {
    id: 7,
    title: 'Taillight',
    description: 'Tail light are red lamps at the rear of a vehicle that make it visible to others, especially in low-light conditions, and they turn on with the headlights. They also incorporate other functions like brake lights (brighter red) and reverse lights (white), along with turn signals and fog lights, to communicate a drivers actions to those behind them.',
    image: 'https://partex.com.pk/wp-content/uploads/2023/08/Backlight-Pair-MG-HS.jpg',
    alt: 'Rahimia Autos Connecting Rod and Camshaft Bushings'
  },
  {
    id: 8,
    title: 'Side Mirror',
    description: 'Side mirrors are exterior mirrors on a vehicles sides that help drivers see areas behind and beside the car, eliminating blind spots for safer driving, lane changes, and parking.',
    image: 'https://partex.com.pk/wp-content/uploads/2025/03/Diathatsu-Mira-side-mirror.webp',
    alt: 'Rahimia Autos Crankshaft and Camshaft for Diesel Engines'
  },
  {
    id: 9,
    title: 'Quater Panel',
    description: 'A quarter panel is an exterior body panel on a vehicles rear sides, located between the rear door and the trunk. It typically wraps around the rear wheel well and is made of materials like steel, aluminum, or plastic. These panels provide structural support, protect the interior from debris and impacts, and contribute to the vehicles appearance',
    image: 'https://partex.com.pk/wp-content/uploads/2023/03/64111B84000P000.jpg.webp',
    alt: 'Rahimia Autos Diesel Fuel Injection Components'
  },
  {
    id: 10,
    title: 'Filters',
    description: 'Car filters are components that trap impurities from oil, air, and fuel, protecting the engine and ensuring clean air inside the cabin.',
    image: 'https://partex.com.pk/wp-content/uploads/2022/07/PT-13780-76M00-000-22-img2.jpg.webp',
    alt: 'Rahimia Autos Premium Engine Lubricants'
  },
];

const Products = () => {
  return (
    <section id="products" className="mb-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-red-500">Car Body Parts</h2>
      {products.map((product) => (
        <article key={product.id} className="mb-6 flex flex-col md:flex-row items-center px-16">
          <img 
            src={product.image} 
            alt={product.alt} 
            className="w-[200px] h-[180px] md:w-1/4 mb-4 md:mb-0 md:mr-4 transform hover:scale-105 transition-transform duration-300" 
            loading="lazy"
          />
          <div>
            <h3 className="text-4xl font-Quicksand font-bold mb-4">{product.id}. {product.title}</h3>
            <p className='text-[#4A4A4A] font-normal font-Quicksand text-xl text-justify'>{product.description}</p>
          </div>
        </article>
      ))}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": products.map((product, index) => ({
            "@type": "Product",
            "position": index + 1,
            "name": product.title,
            "description": product.description,
            "image": product.image,
            "brand": {
              "@type": "Brand",
              "name": product.title.includes("RA Brand") ? "RA" : "Rahimia Autos"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default Products;