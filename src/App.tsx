import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import QueueManagement from './components/QueueManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Default route goes to the auth page */}
        <Route path="/" element={<AuthPage />} />
        
        {/* Queue Management after login */}
        <Route path="/queue-management" element={<QueueManagement username="user" />} />
      </Routes>
    </Router>
  );
};

export default App;
