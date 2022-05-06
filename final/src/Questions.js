import React, {useState, useEffect} from 'react';
import UserInput from './Users/QuestionInput';

function Users() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState(0);
  const [answerBox, showAnswerBox] = useState(false);
  const [answerButton, showAnswerButton] = useState(true);

  useEffect(() => {
    fetch('http://localhost:9000/newQuestions')  
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [update])

  const rerender = () =>{
    var newVal = update + 1;
    console.log(newVal);
    setUpdate(newVal);
  }

  const submitAnswer = () => {

  }

  const upvote = () => {

  }

  const downvote = () => {

  }

  return <div>
      <UserInput notifyParent = {rerender}/>
       <div>
          Previously asked questions
          {users.map(u => <ul key={u.id}>
            Question:
              {u.id} <br></br>
              <button onClick={upvote}>
                    upvote
                </button>
                <button onClick={downvote}>
                    downvote
                </button>
              <br></br>
            Answer:
              {u.name}<br></br>
                <input type="text" placeholder="Answer" id="Question" onChange={e=>setAnswers(e.target.value)}/>
                <button onClick={submitAnswer}>
                    answer
                </button>
          </ul>)}
    </div>
  </div>;
}

export default Users;