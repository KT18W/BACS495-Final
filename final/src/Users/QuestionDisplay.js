function QuestionDisplay(props) {
    return <div>
        <p>
          Previously asked questions here
          {props.users.map(u => <li key={u.question}>{u.question} - {u.answers}</li>)}
        </p>
    </div>;
  }
  
  export default QuestionDisplay;