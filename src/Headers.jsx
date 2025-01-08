import React, { useState } from 'react';
import './Headers.css';
import themeIcon from './assets/night-mode.png'; 

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('darkmode', !isDarkMode);
  };

  return (
    <header className="header">
      <h1 className="header-title">
        clima<span className="highlight">Já</span>
      </h1>
      <button id="theme-switch" onClick={toggleTheme}>
        <img
          src={themeIcon}
          alt="Alterar Tema"
          className="theme-icon"
        />
      </button>
    </header>
  );
};

export default Header;
