import React, {useState, useEffect} from 'react';

function QuestionInput(props) {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState(0);
  const createQuestion = (e) =>{
    var insert = {'question': question, 'answers': answers}
    fetch(process.env.REACT_APP_API_URL_NEWQUESTIONS, 
        {
            method:'POST', 
            body: JSON.stringify(insert),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
        })  
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => setAnswers(data))
    props.notifyParent();
  }

  return <div>
    <h3>
        Ask your question here<br/>
    </h3>
    <input type="text" placeholder="Question" id="Question" onChange={e=>setQuestion(e.target.value)}/><br/>
    <button value="Insert New Question" onClick={createQuestion}>Submit</button>
  </div>;
}

export default QuestionInput;