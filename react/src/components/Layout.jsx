import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {/* Main page content goes here */}
      <main style={{ margin: '20px' }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;

