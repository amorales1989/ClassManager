import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import Button from '@mui/material/Button'

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
    if (username === 'admin' && password === '123456') {
      navigate('/tablero');
    } else {
      console.log('Credenciales incorrectas');
      navigate('/tablero')
    }
  };

  return (
    <div className="login-container" style={{ background: 'black' }}>
      <div className="login-card">
        <img src="/vite.svg" alt="Logo" className="LogoIndulac3.0" />
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
            onChange={(e) => setPassword(e.target.value)} // No es necesario modificar la contraseña
            required
          />
          <Button type="submit" variant="contained">Iniciar Sesión</Button>
        </form>
      </div>
    </div>
  );
};
 
export default Login;
