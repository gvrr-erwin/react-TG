import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveLink(id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value for when the section is considered visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" id="logo" />
        <h1>Tambayan Grill</h1>
      </div>
      <div className="nav-open" onClick={openMenu}>
        <ImMenu />
      </div>
      <ul className="nav-menu" ref={menuRef}>
        <div className="nav-close" onClick={closeMenu}>
          <IoIosCloseCircle />
        </div>
        {['home', 'about', 'menu', 'special', 'event', 'contact'].map((item) => (
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
    </div>
  );
};

export default Navbar;
