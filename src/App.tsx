import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import Login from './components/LoginPage';
import QueueManagement from './components/QueueManagement';

const App: React.FC = () => {
  const handleLogin = (username: string) => {
    // handle user login state
    console.log(`${username} has logged in`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/queue-management" element={<QueueManagement username="user" />} />
      </Routes>
    </Router>
  );
};

export default App;
