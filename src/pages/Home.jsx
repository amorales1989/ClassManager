import * as React from 'react';
import SwipeableTemporaryDrawer from '../components/sidebar';
import Dashboard from './Tablero';
import NavBar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <SwipeableTemporaryDrawer />
        <Dashboard />
        {/* Other components and content for the Home page */}
      </div>
    </>
  );
};

export default Home;
