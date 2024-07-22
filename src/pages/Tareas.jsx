import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

function Tasks() {
  return (
    <div>
      <NavBar />
      <SwipeableTemporaryDrawer />
      <h1>Tasks</h1>
      {/* Aquí podrías agregar una lista o tabla de tareas */}
    </div>
  );
}

export default Tasks;
