import React, {useState, useEffect} from 'react';
import LogIn from './Users/LogIn';
import UserInput from './Users/UserInput';
import './css/Blocks.css';

function LoginBox() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [logModal, showLogModal] = useState(false)

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

  const toggleLogModal = () => {
    showLogModal(!logModal)
  }

  return( <div>
      <button 
        onClick={toggleLogModal}
        className="logModalButton">
          Login
      </button>
      {logModal && (
        <div className='container'>
          <div className='box'>
            <div className="modalContent">
              <LogIn notifyParent = {rerender}/>
              <button
                className='closeRegModalButton'
                onClick={toggleLogModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginBox;
