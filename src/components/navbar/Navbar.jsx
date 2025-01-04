import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-new.png';
import { ImMenu } from 'react-icons/im';
import { IoIosCloseCircle } from 'react-icons/io';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`navbar ${sticky ? 'sticky' : ''}`}
      style={{ marginTop: sticky ? '0' : '30px' }}
    >
      <div className="logo-container">
        <img src={logo} alt="logo" id="logo" />
        <h1>Tambayan Grill</h1>
      </div>
      <div className="nav-open" onClick={openMenu}>
        <ImMenu />
      </div>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <div className="nav-close" onClick={closeMenu}>
          <IoIosCloseCircle />
        </div>
        {['home', 'about', 'menu', 'special', 'event', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`nav-link ${activeLink === item ? 'active' : ''}`}
              onClick={() => {
                setActiveLink(item);
                closeMenu(); // Close the menu on link click
              }}
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
