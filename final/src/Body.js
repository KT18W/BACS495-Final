import React, {useState} from 'react';
import './css/Body.css';

function Body() {
  const[name, setName] = useState("No one");


  return <div>
      <input value={name} onInput={e=> setName(e.target.value)}/>
    <p>Name is set to: {name}</p>
  </div>;
}

export default Body;