import React, {useState, useEffect} from 'react';
import UserDisplay from './Users/UserDisplay';
import UserInput from './Users/UserInput';

function Users() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [login, setLogin] = useState(false)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)  
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [update])

  const rerender = () =>{
    var newVal = update + 1;
    console.log(newVal);
    setUpdate(newVal);
  }


  return <div>
      {users.includes('Katie') &&
      (<div>
        hello
        </div>)}
        {users.includes('1')}
      <UserDisplay users={users}/>
      <UserInput notifyParent = {rerender}/>
  </div>;
}

export default Users;