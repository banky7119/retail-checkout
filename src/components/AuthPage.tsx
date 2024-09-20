import React, { useState } from 'react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const storedUser = localStorage.getItem('user');

  const handleSignUp = () => {
    if (username && password) {
      
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setError('');
      setIsLogin(true); 
    } else {
      setError('Please enter a username and password to sign up.');
    }
  };

  const handleLogin = () => {
    if (storedUser) {
      const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
      if (username === storedUsername && password === storedPassword) {
        setError('');
        
        console.log(`${username} has logged in`);
        window.location.href = '/queue-management'; 
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('You must sign up before you can log in.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
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
      {error && <p className="error">{error}</p>}

      {isLogin ? (
        <>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
