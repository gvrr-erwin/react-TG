import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/MyWorks/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
