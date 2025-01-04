import React, { useState } from 'react';
import Grilled from '../../assets/special-1.png';
import Lumpia from '../../assets/special-2.png';
import Pancit from '../../assets/special-3.png';
import './Special.css';

const Special = () => {
  const [selectedItem, setSelectedItem] = useState('Grilled');

  const menuItems = {
    Grilled: {
      title: 'Grilled',
      price: '$2/pc',
      description:
        'Barbecue and grilled foods offer smoky, savory delights perfect for any outdoor gathering. Per Tray the minimum order is 50 pieces.',
      options: ['Pork BBQ', 'Isaw', 'Tenga'],
      image: Grilled,
    },
    Lumpia: {
      title: 'Lumpia',
      price: '$1.50/pc',
      description:
        'Crispy fried spring rolls filled with a savory blend of ground pork, carrots, and onions, served with a zesty sweet and sour dipping sauce. Per Tray the minimum order is 50 pieces.',
      options: ['Pork & veggie'],
      image: Lumpia,
    },
    Pancit: {
      title: 'Pancit',
      price: '',
      description:
        'Pancit, a beloved Filipino cuisine, delights with its flavorful stir-fried noodles mixed with a variety of meats, vegetables, and seasonings, creating a delicious and satisfying dish.',
      options: [
        'Chicken Pancit - $40/tray',
        'Pork Pancit - $45/tray',
        'Shrimp Pancit - $45/tray',
      ],
      image: Pancit,
    },
  };

  const selected = menuItems[selectedItem];

  return (
    <div id="special" className="special-container">
    {/* Top Section: Titles */}
    <div className="special-header">
      <h2>SPECIALS</h2>
      <h3>Check Our Party Menu</h3>
    </div>
  
    {/* Main Section: Columns */}
    <div className="special-content">
      <div className="special-menu">
        <div className="menu-list">
          {Object.keys(menuItems).map((item) => (
            <div
              key={item}
              className={`menu-item ${selectedItem === item ? 'active' : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
  
      <div className="special-details">
        <div className="special-text">
          <h2 className="special-title">
            {selected.title} <span className="special-price">{selected.price}</span>
          </h2>
          <p className="special-description">{selected.description}</p>
          <h3 className="special-options-title">Options:</h3>
          <ul className="special-options">
            {selected.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="special-image-container">
          <img src={selected.image} alt={selected.title} className="special-image" />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Special;
