import React from 'react'
import './Hero.css'
import profile_img from '../../assets/logo-new.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile logo" id='profile_img' />
        <h1><span>Tambayan Grill,</span> This is the Profile image</h1>
        <p>just the description part</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero