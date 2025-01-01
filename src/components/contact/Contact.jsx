import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.svg'
import phone_icon from '../../assets/phone-icon.svg'
import loc_icon from '../../assets/loc-icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Contact description</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>gvrr.erwin@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" />
                        <p>09498292309</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loc_icon} alt="" />
                        <p>baliwag, bulacan</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">

                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
               
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
               
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                
                <button type='submit' className="contact-submit">Submit</button>
           
            </form>
        </div>
    </div>
  )
}

export default Contact