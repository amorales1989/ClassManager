import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123456') { 
      setIsAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/home" element={
          isAuthenticated ? <Home /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
};

export default App;
