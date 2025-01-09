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
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61571327565892', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/tambayangrillrva/', '_blank');
  };

  return (
    <div className='hero'>
      <h1>Discover the Heart<br />of the <span>Philippines</span><br />in Every Bite.</h1>
      <h2>Est. 2022</h2>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleMenuClick}>
          Our Menu
        </div>
      </div>
      <div className='hero-icon-style'>
        <FaFacebookSquare
          onClick={handleFacebookClick}
          style={{
            fontSize: '45px',
            color: 'white',
            cursor: 'pointer',
            padding: '10px',
            border: '2px solid #3b5998',
            borderRadius: '25%',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3b5998')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        />
        <AiFillInstagram
          onClick={handleInstagramClick}
          style={{
            fontSize: '45px',
            color: 'white',
            cursor: 'pointer',
            padding: '10px',
            border: '2px solid #cd486b',
            borderRadius: '25%',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundImage = 'linear-gradient(90deg, #f58529, #cd486b)')}
          onMouseLeave={(e) => (e.target.style.backgroundImage = 'none')}
        />
      </div>
    </div>
  );
};

export default Hero;
