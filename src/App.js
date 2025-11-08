import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./pages/Intro";
import Mission from "./pages/Mission";
import Products from "./pages/Products";
import Guarantee from "./pages/Guarantee";
import Testimonials from "./pages/Testimonials";
import WhatsAppButton from "./Components/WhatsAppButton";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8">
        <Intro />
        <Mission />
        
        <Products />
       
        <Guarantee />
        {/* <Vision/> */}
        <Testimonials />
        {/* <ContactForm /> */}
        <Footer />
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;
