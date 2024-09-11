import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MobileCheckout from './components/MobileCheckout';
import SelfServiceKiosk from './components/SelfServiceKiosk';
import QueueManagement from './components/QueueManagement';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/mobile-checkout">Mobile Checkout</Link></li>
          <li><Link to="/self-service-kiosk">Self-Service Kiosk</Link></li>
          <li><Link to="/queue-management">Queue Management</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/mobile-checkout" element={<MobileCheckout />} />
        <Route path="/self-service-kiosk" element={<SelfServiceKiosk />} />
        <Route path="/queue-management" element={<QueueManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
