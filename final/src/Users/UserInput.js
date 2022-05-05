import React, {useState, useEffect} from 'react';

function UserInput(props) {
  const [name, setName] = useState(0);
  const [id, setId] = useState(0);
  const createUser = (e) =>{
    var insert = {'id': id, 'name': name}
    fetch(process.env.REACT_APP_API_URL, 
        {
            method:'POST', 
            body: JSON.stringify(insert),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
        })  
      .then(res => res.json())
      .then(data => console.log(data))
    props.notifyParent();
  }

  return <div>
      <p>
        Register Here!<br/>
        <input type="text" placeholder="Id number" id="id" onChange={e=>setId(e.target.value)}/><br/>
        <input type="text" placeholder="Name" id="name" onChange={e=>setName(e.target.value)}/><br/>
        <button value="Insert New User" onClick={createUser}>Register</button>
      </p>
  </div>;
}

export default UserInput;