import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

function Settings() {
  return (
    <div>
      <NavBar />
      <SwipeableTemporaryDrawer />
      <h1>Settings</h1>
      {/* Aquí podrías agregar configuraciones */}
    </div>
  );
}

export default Settings;
