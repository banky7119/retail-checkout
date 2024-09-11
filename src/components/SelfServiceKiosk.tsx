import React from 'react';
import { LocalMall } from '@mui/icons-material';
import './SelfServiceKiosk.css';

const SelfServiceKiosk: React.FC = () => {
  const availableItems = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ];

  return (
    <div className="container">
      <h2><LocalMall /> Self-Service Kiosk</h2>
      <div className="kiosk-items">
        {availableItems.map((item, index) => (
          <div key={index} className="item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfServiceKiosk;
