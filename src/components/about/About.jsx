import React from 'react';
import './About.css';
import profile_img from '../../assets/logo-new.png';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { FaTruckFront } from "react-icons/fa6";
import { GiPaperBagFolded } from "react-icons/gi";

const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
  }

const handleInstagramClick = () => {
window.open('https://www.instagram.com', '_blank');
}

const About = () => {
  return (
    <div id='about'>
        <div className='about'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <h2>Tambayan Grill RVA</h2>
                    <p>At Tambayan Grill, we specialize in authentic Filipino cuisine, perfect for event catering and delivery. Whether you're hosting a large gathering or a small celebration, our delicious dishes will bring the flavors of the Philippines right to your doorstep. Let us make your event memorable with our exceptional food and service.</p>
                    <ul>
                        <li><FaTruckFront className='list-icon' />Pop Up Truck</li>
                        <li><GiPartyPopper className='list-icon' />Event Catering Services by Tambayan Grill</li>
                        <li><GiPaperBagFolded className='list-icon' />Food Delivery & Pick Up</li>
                    </ul>
                    <div className='icon-style'>
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
                <div className="about-right">
                    <img src={profile_img} alt="prifle about" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About