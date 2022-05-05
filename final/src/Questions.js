import React, {useState, useEffect} from 'react';
import QuestionDisplay from './Users/QuestionDisplay';
import QuestionInput from './Users/QuestionInput';

function Users() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [login, setLogin] = useState(false)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_NEWQUESTIONS)  
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [update])

  const rerender = () =>{
    var newVal = update + 1;
    console.log(newVal);
    setUpdate(newVal);
  }


  return <div>
      <QuestionInput notifyParent = {rerender}/>
      <QuestionDisplay users={users}/>
  </div>;
}

export default Users;