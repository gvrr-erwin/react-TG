import React from 'react';
import './Hero.css';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {

  const handleMenuClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
  }

  return (
    <div className='hero'>
      <h1>Discover the Heart<br />of the <span>Philippines</span><br />in Every Bite.</h1>
      <h2>Est. 2022</h2>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleMenuClick}>
          Our Menu
        </div>
      </div>
      <div className='icon-style'>
        <FaFacebookSquare className="btn-fb" onClick={handleFacebookClick} />
        <AiFillInstagram className="btn-insta" onClick={handleInstagramClick} />
      </div>
    </div>
  );
}

export default Hero;
