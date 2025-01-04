import React from 'react';
import './About.css';
import profile_img from '../../assets/logo-new.png';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
  }

const handleInstagramClick = () => {
window.open('https://www.instagram.com', '_blank');
}

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <h2>Tambayan Grill RVA</h2>
                <p>At Tambayan Grill, we specialize in authentic Filipino cuisine, perfect for event catering and delivery. Whether you're hosting a large gathering or a small celebration, our delicious dishes will bring the flavors of the Philippines right to your doorstep. Let us make your event memorable with our exceptional food and service.</p>
                <ul>
                    <li>Pop Up Truck</li>
                    <li>Event Catering Services by Tambayan Grill</li>
                    <li>Food Delivery & Pick Up</li>
                </ul>
                <div className='icon-style'>
                    <FaFacebookSquare className="btn-fb" onClick={handleFacebookClick} />
                    <AiFillInstagram className="btn-insta" onClick={handleInstagramClick} />
                </div>
            </div>
            <div className="about-righ">
                <img src={profile_img} alt="prifle about" />
            </div>
        </div>
    </div>
  )
}

export default About