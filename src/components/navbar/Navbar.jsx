import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-new.png';
import { ImMenu } from 'react-icons/im';
import { IoIosCloseCircle } from 'react-icons/io';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" id="logo" />
      <div className="nav-open" onClick={openMenu}>
        <ImMenu />
      </div>
      <ul className="nav-menu" ref={menuRef}>
        <div className="nav-close" onClick={closeMenu}>
          <IoIosCloseCircle />
        </div>
        {['home', 'about', 'service', 'portfolio', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`nav-link ${activeLink === item ? 'active' : ''}`}
              onClick={() => setActiveLink(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;