import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="company-name">Windsurf</h1>
          <span className="tagline">Autonomous Aircraft Fueling</span>
        </div>
        <div className="header-right">
          <button className="btn btn-outline">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
