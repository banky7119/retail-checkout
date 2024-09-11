import React, { useState } from 'react';
import { ShoppingCart, AddCircleOutline } from '@mui/icons-material';
import './MobileCheckout.css';

const MobileCheckout: React.FC = () => {
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);
  const [productCode, setProductCode] = useState('');

  const addProductToCart = () => {
    const scannedProduct = { name: 'Product ' + productCode, price: Math.floor(Math.random() * 100) };
    setCart([...cart, scannedProduct]);
    setProductCode('');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handlePayment = () => {
    alert(`Total price: $${getTotalPrice()}. Proceeding to payment gateway...`);
  };

  return (
    <div className="container">
      <h2><ShoppingCart /> Mobile Checkout</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Scan product code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
        />
        <button onClick={addProductToCart}>
          <AddCircleOutline /> Add to Cart
        </button>
      </div>

      <div className="cart">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="total">
          <h4>Total: ${getTotalPrice()}</h4>
          <button onClick={handlePayment} className="pay-button">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default MobileCheckout;
