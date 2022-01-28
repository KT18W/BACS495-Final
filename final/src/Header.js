import React from 'react'
import './Header.css';
import lines from './images/lines.jpg';

function Header() {
  return (
    <div className="Header">
      <button className="linesButton">
          <img className="Lines" src={lines} alt="Menu" />
      </button>
      <h1 className="Title">
          The Answers to University
      </h1>
    </div>
  )
}

export default Header