import React from 'react'
import './TopBar.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="top-bar" id='home'>
        <div className="top-bar-detail">
            <BsFillTelephoneFill className="icon-style" />
            <p>+(804)292-9282</p>
        </div>
        <div className="top-bar-detail">
            <FaLocationDot className="icon-style" />
            <p>Richmond, Virginia, USA</p>
        </div>
    </div>
  )
}

export default TopBar