import React from 'react'
import treasure from './images/treasure.jpg';
import './Body.css';

function Body() {
    return (
      <div className="Body">
            <img className="Pic" src={treasure} alt="Treasure Chest" />
          
      </div>
    )
  }
  
  export default Body