import React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

function Reports() {
  return (
    <div>
      <NavBar />
      <SwipeableTemporaryDrawer />
      <h1>Reports</h1>
      {/* Aquí podrías agregar una lista o tabla de informes */}
    </div>
  );
}

export default Reports;
