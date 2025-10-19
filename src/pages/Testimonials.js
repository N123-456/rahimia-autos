import React from 'react';

const testimonials = [
  "Rahimia Autos has become my trusted partner in keeping my fleet of vehicles running smoothly. Their consistent quality, attention to detail, and commitment to customer satisfaction have made them an invaluable resource for my business. I can't recommend them enough!",
  "Dealing with Rahimia Autos has been a breeze from start to finish. Their knowledgeable staff guided me through the selection process, ensuring I got the right parts for my vehicle. With their reliability and efficiency, I'll definitely be a returning customer.",
  "I stumbled upon Rahimia Autos while searching for a specific spare part online. Not only did they have exactly what I needed, but their user-friendly website and quick delivery exceeded my expectations. Thanks to them, my car is back on the road in no time!",
  "Rahimia Autos has been a lifesaver for me and my garage. Their wide range of spare parts, coupled with their competitive prices, has helped me keep my customers satisfied and coming back. I highly recommend their services to anyone in the automotive repair industry.",
  "As a mechanic, finding reliable spare parts suppliers is crucial for my business. Rahimia Autos has consistently provided top-notch products, ensuring my clients' vehicles run smoothly. Their extensive inventory and prompt service make them my go-to choice every time.",
];

const Testimonials = () => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-2">What Our Clients Say</h3>
      <ul className="list-disc pl-6">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="mb-2">{testimonial}</li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;