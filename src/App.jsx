import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <div>
      <SmoothScroll />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default App;