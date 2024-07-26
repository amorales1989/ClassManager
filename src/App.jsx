import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Settings from './pages/Configuraciones';
import Dashboard from './pages/Tablero';
import Profile from './pages/Perfil';
import Asistencias from './pages/Asistencia';
import Tasks from './pages/Tareas';
import Reports from './pages/Informes';
import Grades from './pages/Calificaciones';
import ChatPage from './pages/Comunicacion';
import Teachers from './pages/Informes maestros';
import Courses from './pages/Informes cursos';
import HomeClient from './client/home';


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
        <Route path="/" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/tablero" element={<Home />} />
        <Route path="/asistencias" element={<Asistencias />} />
        <Route path="/tareas" element={<Tasks />} />
        <Route path="/informes" element={< Reports/>} />
        <Route path="/maestros" element={< Teachers/>} />
        <Route path="/cursos" element={< Courses/>} />
        <Route path="/calificaciones" element={< Grades/>} />
        <Route path="/contacto" element={< ChatPage/>} />
        <Route path="/Perfil" element={< Profile/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Home" element={<HomeClient />} />
      </Routes>
    </Router>
  );
};

export default App;
