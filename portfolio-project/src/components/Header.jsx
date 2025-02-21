import React from 'react';
import './Header.css';

function Header() {
  const name = "K Sri Harsha Royal";
  const profession = "Full Stack Developer";
  return (
    <header className='header'>
      <div className='header-content'>
        <h1>{name}</h1>
        <p>{profession}</p>
      </div>
      <nav>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
