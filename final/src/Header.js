import React, {useState} from 'react'; 
import './Header.css';

function Header() {

  const [value, setValue] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!value){
      setValue(true);
    }
    if (value){
      setValue(false);
    }
  };

  return (

    <div className="Header">
      <h1 className="Title">
          The Answers to University
      </h1>
          <div className="done">
            {!value ? (<form onSubmit={submit}>        
          <label>
            Username:
            <input type="text" name="username" />       
          </label>
          <label>
            Password:
            <input type="password" name="password" />       
          </label>
          <input type="submit" value="login"/>
        </form>
        ) : <form onSubmit={submit}>        
        <input type="submit" value="logout"/>
      </form>}
          </div>
      </div>
  );
}

export default Header;