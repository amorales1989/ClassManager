import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import Button from '@mui/material/Button';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.toLowerCase()); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
    
    // Check if the user is on a mobile device
    const isMobile = window.innerWidth <= 600;

    if (username === 'admin' && password === '123456') {
      navigate(isMobile ? '/home' : '/tablero');
    } else {
      console.log('Credenciales incorrectas');
      // You can handle incorrect credentials here if needed
      navigate(isMobile ? '/home' : '/tablero');
    }
  };

  return (
    <div className="login-container" style={{ background: 'black' }}>
      <div className="login-card">
        <img src="/logoSchool.png" alt="Logo" style={{ maxWidth: '40%', height: 'auto' }} className="LogoIndulac3.0" />
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange} 
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <Button type="submit" className='button'>Iniciar Sesión</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
