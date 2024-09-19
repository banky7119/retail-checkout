import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password) {
      const existingUser = localStorage.getItem(`user-${username}`);
      if (existingUser) {
        setError('User already exists.');
      } else {
        localStorage.setItem(
          `user-${username}`,
          JSON.stringify({ password })
        );
        setError('');
        navigate('/login'); 
      }
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p className="error">{error}</p>}
    </div>
    

  );

};

export default SignUp;
