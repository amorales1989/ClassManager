import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

function Courses() {
  return (
    <div>
      <NavBar />
      <SwipeableTemporaryDrawer />
      <h1>Cursos</h1>
      {/* Aquí podrías agregar una lista o tabla de informes */}
    </div>
  );
}

export default Courses;
