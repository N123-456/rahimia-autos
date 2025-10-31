import React from 'react';

const products = [
  {
    id: 1,
    title: 'Piston',
    description: 'Engine pistons are vital components within internal combustion engines. They play a crucial role in converting fuel energy into mechanical motion, driving the vehicle forward. These cylindrical structures move up and down within the engine cylinders, creating the necessary compression and expansion phases of the combustion cycle. Constructed from durable materials such as aluminum or steel alloys, pistons endure extreme temperatures and pressures. Their design includes features like piston rings to maintain a proper seal and prevent gas leakage. Modern pistons are often engineered with precision to maximize efficiency, performance, and longevity, reflecting ongoing advancements in automotive technology.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/12-1.png',
    alt: 'Rahimia Autos Diesel Engine Piston'
  },
  {
    id: 2,
    title: 'Piston Ring',
    description: 'Engine piston rings are essential components that form a vital seal between the piston and the cylinder wall within internal combustion engines. These thin, circular bands are typically made from durable materials such as cast iron, steel, or various alloys. Their primary function is to prevent the leakage of combustion gases from the combustion chamber, ensuring optimal engine performance and efficiency. Piston rings also help regulate oil consumption by scraping excess oil off the cylinder walls. They undergo rigorous engineering to withstand high temperatures, pressures, and frictional forces. Advanced designs may include features like compression rings, oil control rings, and special coatings to enhance performance and durability.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/6-1.png',
    alt: 'Rahimia Autos Piston Ring for Diesel Engines'
  },
  {
    id: 3,
    title: 'Cylinder Liner',
    description: 'Engine cylinder liners, also known as cylinder sleeves, are critical components found in many internal combustion engines. These cylindrical structures are inserted into the engine block\'s cylinder bores to provide a smooth and durable surface for the piston to move within. Cylinder liners are typically made from materials such as cast iron, steel, or aluminum alloys, chosen for their high strength and wear resistance. They play a crucial role in maintaining proper piston alignment, reducing friction, and dissipating heat generated during combustion. Advanced liners may feature special coatings or treatments to enhance durability and lubrication properties, ensuring long-lasting engine performance.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/11-1.png',
    alt: 'Rahimia Autos Cylinder Liner for Trucks and Tractors'
  },
  {
    id: 4,
    title: 'Engine Valve, Valve Seat and Guide',
    description: 'Engine valves, along with valve seats and guides, are integral components of an internal combustion engine\'s cylinder head. Valves control the flow of air and fuel into the combustion chamber and the release of exhaust gases out of the chamber during the engine\'s intake, compression, power, and exhaust strokes. Typically made of high-strength alloys such as stainless steel, valves endure extreme temperatures and pressures. Valve seats, often composed of hardened steel or alloy, provide a sealing surface for the valves, ensuring proper compression and preventing gas leakage. Valve guides, usually made from bronze or cast iron, guide the valves\' movement within the cylinder head, minimizing friction and maintaining alignment. Advanced manufacturing techniques and materials enhance the durability, performance, and longevity of these components.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/5-1-480x480.png',
    alt: 'Rahimia Autos Engine Valve and Seat'
  },
  {
    id: 5,
    title: 'Engine Bearings',
    description: 'Engine bearings are crucial components that support rotating and reciprocating parts within internal combustion engines, ensuring smooth and frictionless operation. These bearings come in various types, including main bearings, connecting rod bearings, and camshaft bearings, each serving specific functions. Typically made from durable materials like steel, bronze, or aluminum alloys, engine bearings withstand high loads, temperatures, and speeds. They create a thin film of lubrication between moving parts, reducing friction and wear. Bearings are meticulously designed for precise fitment and alignment to maintain engine stability and performance. Modern bearings may incorporate advanced technologies such as hydrodynamic lubrication, coatings, and surface treatments to enhance durability and efficiency.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/9-1-480x480.png',
    alt: 'Rahimia Autos Engine Bearings for Diesel Engines'
  },
  {
    id: 6,
    title: 'Engine Gaskets',
    description: 'Engine gaskets are critical sealing components that prevent fluid and gas leaks between engine components, ensuring optimal performance and efficiency. These thin, flexible materials are typically made from materials like rubber, cork, paper, or metal. They are strategically placed between mating surfaces such as cylinder heads, engine blocks, and exhaust manifolds to create a tight seal. Engine gaskets withstand high temperatures, pressures, and vibrations, maintaining their integrity over time. They come in various shapes and sizes to accommodate different engine configurations and applications. Proper installation and maintenance of gaskets are essential to prevent leaks and ensure the longevity of engine components.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/4-1-480x480.png',
    alt: 'Rahimia Autos Engine Gaskets for Trucks and Buses'
  },
  {
    id: 7,
    title: 'Con Rod and Cam Bush',
    description: 'Engine connecting rod bushings and camshaft bushings are vital components in internal combustion engines, facilitating smooth and efficient operation. Connecting rod bushings, also known as wrist pin bushings, are located at the small end of the connecting rod and provide a bearing surface for the wrist pin to rotate within. They are typically made of bronze or other durable alloys, offering excellent wear resistance and lubrication properties. Camshaft bushings, on the other hand, support the camshaft within the engine block or cylinder head, ensuring precise camshaft alignment and rotation. These bushings are often made from similar materials and undergo precise machining to maintain tight tolerances and minimize friction. Proper lubrication and maintenance of these bushings are essential for optimal engine performance and longevity.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/1-480x480.jpg',
    alt: 'Rahimia Autos Connecting Rod and Camshaft Bushings'
  },
  {
    id: 8,
    title: 'Crankshaft and Camshaft',
    description: 'The engine crankshaft and camshaft are vital components in internal combustion engines, each playing a distinct yet interconnected role in power generation and valve operation. The crankshaft, typically made of high-strength steel, converts reciprocating motion from the pistons into rotational motion, transferring power to the drivetrain. It features precision-machined journals and counterweights to ensure smooth rotation and balance. In contrast, the camshaft, also usually made of steel, controls the opening and closing of engine valves, regulating the intake of air and fuel and the expulsion of exhaust gases. Both components undergo rigorous engineering and precise manufacturing to withstand high loads, temperatures, and speeds, ensuring optimal engine performance and longevity. Lubrication is crucial to reduce friction and wear on bearings supporting the shafts, maintaining smooth operation over the engine\'s lifespan.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/3-480x480.jpg',
    alt: 'Rahimia Autos Crankshaft and Camshaft for Diesel Engines'
  },
  {
    id: 9,
    title: 'Nozzle, Plunger, Delivery Valve and Head Rotor',
    description: 'The engine nozzle, plunger, delivery valve, and head rotor are integral components of diesel fuel injection systems, each playing a crucial role in fuel delivery and combustion. The nozzle atomizes fuel into a fine mist, facilitating efficient combustion and power generation. Plungers regulate fuel quantity injected into cylinders, controlling engine speed and performance. Delivery valves govern the timing and duration of fuel injection, synchronizing with engine cycles for optimal efficiency. The head rotor distributes pressurized fuel to individual injectors, ensuring uniform fuel delivery across all cylinders. Precision engineering and tight tolerances are vital for reliable operation under extreme conditions. Proper maintenance and calibration optimize engine performance and reduce emissions.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/10-1-480x480.png',
    alt: 'Rahimia Autos Diesel Fuel Injection Components'
  },
  {
    id: 10,
    title: 'Lubricant',
    description: 'Engine oil is the lifeblood of internal combustion engines, providing crucial lubrication, cooling, and cleaning functions. It circulates through the engine, forming a protective film between moving parts, reducing friction, and preventing wear. Engine oil also absorbs heat from friction, dissipating it through the oil pan and cooling system. Additionally, it carries away contaminants and debris, keeping the engine clean and prolonging its lifespan. Engine oils come in various formulations, including mineral, synthetic, and semi-synthetic blends, each offering specific performance benefits. Regular oil changes are essential to maintain optimal engine health, ensuring smooth operation, efficiency, and longevity.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/2-480x480.jpg',
    alt: 'Rahimia Autos Premium Engine Lubricants'
  },
  {
    id: 11,
    title: 'RA Brand',
    description: 'RA, the hallmark of Rahimia Autos, introduces a premier line of diesel pump parts tailored for tractors and Bedford vehicles. Crafted in collaboration with top manufacturers, each RA product represents a fusion of precision engineering and reliability. Our brand promotion highlights RA\'s dedication to delivering superior performance and longevity in the field. With RA, tractor and Bedford owners experience unparalleled quality, backed by the Rahimia Autos\' legacy of trust. Discover the difference RA diesel pump parts make – optimizing your machinery\'s efficiency and durability, ensuring smooth operations in every task. Elevate your equipment\'s performance with RA, your trusted partner in diesel excellence. Each product is meticulously trialed and tested before being introduced into the market, ensuring utmost reliability and customer satisfaction.',
    image: 'https://usmanauto.com/wp-content/uploads/2024/02/UA-Brand-480x480.jpg',
    alt: 'RA Brand Diesel Pump Parts by Rahimia Autos'
  },
];

const Products = () => {
  return (
    <section id="products" className="mb-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-red-500">Our Diesel Engine Parts</h2>
      {products.map((product) => (
        <article key={product.id} className="mb-6 flex flex-col md:flex-row items-center">
          <img 
            src={product.image} 
            alt={product.alt} 
            className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 transform hover:scale-105 transition-transform duration-300" 
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