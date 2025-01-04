import React from 'react';
import './App.css'
import TopBar from './components/topBar/TopBar';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import { Menu } from './components/menu/Menu';
import Special from './components/special/Special';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import { Event } from './components/event/Event';

const App = () => {
  return (
    <div>
      <div className="home-view">
        <TopBar />
        <Navbar />
        <Hero />
      </div>
      <div className="about-view">
        <About />
      </div>
      <Menu />
      <Special />
      <div className="event-view">
        <Event />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
