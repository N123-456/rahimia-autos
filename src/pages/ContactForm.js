import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! (No backend, so logged to console)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mb-8">
      <h3 className="text-4xl font-bold text-center mb-10 text-red-500">Contact Rahimia Autos</h3>
      {/* <h4 className="text-xl mb-4">Have a Question? Get in Touch</h4> */}
      <form onSubmit={handleSubmit} className="space-y-4 px-16">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-white transition-all duration-300" 
          required 
          aria-label="Your Name"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-white transition-all duration-300" 
          required 
          aria-label="Your Email"
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-white transition-all duration-300" 
          required 
          aria-label="Your Message"
        />
        <button 
          type="submit" 
          className="bg-red-500 text-white px-4 py-2 rounded  transform hover:scale-105 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;