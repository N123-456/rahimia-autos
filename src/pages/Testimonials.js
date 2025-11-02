import React from 'react';
import { useState } from 'react';
// const testimonials = [
  
//   "Dealing with Rahimia Autos has been a breeze from start to finish. Their knowledgeable staff guided me through the selection process, ensuring I got the right parts for my vehicle. With their reliability and efficiency, I'll definitely be a returning customer.",
//   "I stumbled upon Rahimia Autos while searching for a specific spare part online. Not only did they have exactly what I needed, but their user-friendly website and quick delivery exceeded my expectations. Thanks to them, my car is back on the road in no time!",
//   "Rahimia Autos has been a lifesaver for me and my garage. Their wide range of spare parts, coupled with their competitive prices, has helped me keep my customers satisfied and coming back. I highly recommend their services to anyone in the automotive repair industry.",
//   "As a mechanic, finding reliable spare parts suppliers is crucial for my business. Rahimia Autos has consistently provided top-notch products, ensuring my clients' vehicles run smoothly. Their extensive inventory and prompt service make them my go-to choice every time.",
// ];



const Testimonials = () => {
  const Testimonials = [
    {
      id: "1",
      name: "John Carter",
      title: "Founder & CEO at Innovexa",
      feedback:
        "Rahimia Autos has become my trusted partner in keeping my fleet of vehicles running smoothly. Their consistent quality, attention to detail, and commitment to customer satisfaction have made them an invaluable resource for my business. I can't recommend them enough!",
    },
    {
      id: "2",
      name: "Mice Anders",
      title: "Chief Technology Officer at NexaCore",
      feedback:
        "Their technical expertise is outstanding. From UI/UX to backend architecture, everything was executed flawlessly. Our project was delivered on time and with exceptional quality.",
    },
    {
      id: "3",
      name: "Jennifer Lee",
      title: "Product Manager at BrightApps",
      feedback:
        "Absolutely loved working with them! They transformed our ideas into a functional, beautiful application. Their team was flexible, skilled, and incredibly easy to collaborate with.",
    },
  ];

  const [testimonials, setTestimonials] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="mb-8">
      {/* <h3 className="text-2xl font-semibold mb-2"></h3> */}
        <div className="max-w-7xl mx-auto pt-10">
          <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
            What Our Clients Say
          </h1>
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Testimonial Cards */}
            <div className="flex flex-col gap-4">
              {Testimonials.map((t, index) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer bg-white w-full md:w-[500px] rounded-lg shadow-md p-4 border-l-2  transform hover:scale-105 transition duration-300 ease-in-out animate-fadeIn flex items-start ${
                    index === selectedIndex
                      ? "bg-gray-200 border-red-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <div className="mr-4">
                    <img src='./images/testmonal.png' alt='test' className="h-12 w-14 mr-4 transform hover:scale-105 transition-transform duration-300"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-[17px] font-medium font-Outfit text-[#000000]">
                          {t.name}
                        </h3>
                        <p className="text-[15px] font-medium font-Outfit text-[#4A4A4A]">
                          {t.title}
                        </p>
                      </div>
                      {/* <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-purple-600 text-sm hover:text-red-700"
                title="Delete testimonial"
              >
                ❌
              </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Paragraph */}
            <div className="lg:min-h-[370px] sm:min-h-[200px] md:min-h-[200px] relative pl-[100px] pt-[84px] p-5 rounded-[10px] bg-[#f7efff]">
              <p className="relative before:content-['“'] before:absolute before:left-0 before:top-0 before:translate-x-[-90px] before:translate-y-[-150px] before:text-[15rem] before:font-serif before:text-[#9550ff] w-full lg:text-[20px] sm:text-[18px] md:text-[18px]">
                {Testimonials[selectedIndex]?.feedback}
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Testimonials;