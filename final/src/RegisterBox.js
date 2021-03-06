import React, {useState, useEffect} from 'react';
import LogIn from './Users/LogIn';
import UserInput from './Users/UserInput';
import './css/Blocks.css';

function RegisterBox() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [regModal, showRegModal] = useState(false);
  const [regButton, showRegButton] = useState(true);

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

  const toggleRegModal = () => {
    showRegModal(!regModal)
    showRegButton(!regButton)
  }

  return( <div>
    {regButton && (
      <button onClick={toggleRegModal}>
          Register
      </button>
    )}
      {regModal && (
        <div className='container'>
          <div className='box'>
            <div className="modalContent">
              <UserInput notifyParent = {rerender}/>
              <button
                className='closeRegModalButton'
                onClick={toggleRegModal}>
                close
              </button>
            </div>
          </div>
        </div>
        ///////////////////////////////////////////////////////////////
      )}
    </div>
  );
}

export default RegisterBox;