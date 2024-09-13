import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MobileCheckout from './components/MobileCheckout';

import QueueManagement from './components/QueueManagement';
import LoginPage from './components/LoginPage';
import './App.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const handleLogin = (user: string) => {
    setUsername(user);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/mobile-checkout" element={<MobileCheckout />} />
      
        <Route 
          path="/queue-management" 
          element={isAuthenticated ? <QueueManagement username={username!} /> : <Navigate to="/login" />}
        />
        {/* Default route redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
