import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo-new.png'
import mail_icon from '../../assets/mail-icon.svg'

const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>footer text</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                c Erwin guevarra. all rights reserve
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default footer