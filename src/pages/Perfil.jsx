import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

function Profile() {
  return (
    <div>
      <NavBar />
      <SwipeableTemporaryDrawer />
      <h1>Profile</h1>
      {/* Aquí podrías agregar información del perfil */}
    </div>
  );
}

export default Profile;
