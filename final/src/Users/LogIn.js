import React, {useState, useEffect} from 'react';

function LogIn(props) {
  const [name, setName] = useState(0);
  const [users, setUsers] = useState(0);
  const [inDatabase, setInDatabase] = useState(false);
  function userExists(name) {
    return users.some(function(el) {
      return el.name === name;
    }); 
  }
  const createUser = (e) =>{
    var insert = {'name': name}
    fetch(process.env.REACT_APP_API_URL, 
        {
            method:'GET', 
            name: JSON.stringify(insert),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
        })  
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch((res) => {
        console.log("couldn't find user")
      })
    checker();
  }
  function checker() {
    console.log("begin test");
    console.log(userExists(name));
    setInDatabase(userExists(name));
    console.log(inDatabase);
    console.log("end test");
  }
  return <div>
      <p>
        Login Here!<br/>
        <input type="text" id="name" placeholder="Name" onChange={e=>setName(e.target.value)}/><br/>
      </p>
      {inDatabase &&
        <p>
          Welcome User
        </p>
      }
      {!inDatabase &&
        <p>
          Hello, please register
        </p>
      }
      <button value="Insert New User" onClick={createUser}>Login</button>
  </div>;
}

export default LogIn;