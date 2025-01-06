import React from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact'>
        <div className="contact-title">
          <h3>Contact</h3>
          <h1>Contact Us</h1>
        </div>
        <div className="contact-section">
          <div className="contact-item">
            <div className="contact-icon">
              <FaLocationDot />
            </div>
            <div className="contact-details">
              <h2>Location:</h2>
              <p>Richmond, Virginia, USA</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FaTruck />
            </div>
            <div className="contact-details">
              <h2>Pop up Truck:</h2>
              <p>Check our Social Media Accounts:</p>
              <p>Instagram - tambayangrill_rva</p>
              <p>Facebook - Tambayan Grill RVA</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <MdEmail />
            </div>
            <div className="contact-details">
              <h2>Email:</h2>
              <p>tambayangrillrva@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <PiPhoneCallFill />
            </div>
            <div className="contact-details">
              <h2>Call:</h2>
              <p>+(804)292-9282</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
