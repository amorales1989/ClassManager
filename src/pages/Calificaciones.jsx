import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import Navbar from '../components/Navbar';

function Grades() {
  return (
    <div>
      <Navbar />
      <SwipeableTemporaryDrawer />
      <h1>Grades</h1>
      {/* Aquí podrías agregar una lista o tabla de calificaciones */}
    </div>
  );
}

export default Grades;
