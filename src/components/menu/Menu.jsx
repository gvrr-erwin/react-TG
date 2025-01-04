import React, { useState } from 'react';
import PorkMenu from '../../assets/pork_menu';
import ChickenMenu from '../../assets/chicken_menu';
import BeefMenu from '../../assets/beef_menu';
import VegeMenu from '../../assets/vege_menu';
import './Menu.css';

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('Pork');

  const menus = {
    Pork: PorkMenu,
    Chicken: ChickenMenu,
    Beef: BeefMenu, 
    Vegetable: VegeMenu,
  };

  return (
    <div id='menu' className="menu-container">
      <h1 className="menu-title">Check Our Tasty Menu</h1>
      <div className="menu-tabs">
        {Object.keys(menus).map((menu) => (
          <button
            key={menu}
            className={`menu-tab ${activeMenu === menu ? 'active' : ''}`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menus[activeMenu].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-image">
              <img src={item.m_img} alt={item.m_name} />
            </div>
            <div className="menu-details">
              <h3 className="menu-name">{item.m_name}</h3>
              <p className="menu-desc">{item.m_desc}</p>
            </div>
            <div className="menu-price">{item.m_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
