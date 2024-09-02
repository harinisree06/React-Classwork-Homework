import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        fontSize: '24px',
        cursor: 'pointer'
      }} onClick={toggleMenu}>
        ☰
      </div>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold'
      }}>NavBar</div>
      <div style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Login
      </div>
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '10px',
          backgroundColor: '#444',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '150px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <a href="#home" onClick={closeMenu} style={{
            color: 'white',
            padding: '12px 16px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease'
          }}>Home</a>
          <a href="#about" onClick={closeMenu} style={{
            color: 'white',
            padding: '12px 16px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease'
          }}>About</a>
          <a href="#contact" onClick={closeMenu} style={{
            color: 'white',
            padding: '12px 16px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease'
          }}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
