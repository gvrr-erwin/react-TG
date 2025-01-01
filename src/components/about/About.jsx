import React from 'react'
import './About.css'
import profile_img from '../../assets/logo-new.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="prifle about" />
            </div>
            <div className="about-righ">
                <div className="about-para">
                    <p>just description</p>
                    <p>another description</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>sample skill</p>
                        <hr style={{width: '50%'}} />
                    </div>
                    <div className="about-skill">
                        <p>sample skill 2</p>
                        <hr style={{width: '25%'}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>projects completed</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About