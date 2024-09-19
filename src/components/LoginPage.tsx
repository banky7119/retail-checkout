import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem(`user-${username}`);
    if (storedUser) {
      const { password: storedPassword } = JSON.parse(storedUser);
      if (password === storedPassword) {
        onLogin(username);
        navigate('/queue-management'); 
      } else {
        setError('Invalid password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
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
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <span onClick={() => navigate('/signup')}>Sign up here</span>
      </p>
    </div>
  );
};

export default Login;
