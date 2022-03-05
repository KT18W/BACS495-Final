import React from 'react'
import './Header.css';
import { useForm } from "react-hook-form";
import lines from './images/lines.jpg';

  const Header = () => {  
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data)
    }
    return (
      <div className="Header">
        <button className="linesButton">
            <img className="Lines" src={lines} alt="Menu" />
        </button>
        <h1 className="Title">
            The Answers to University
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>        
            <label>
              Username:
              <input type="text" name="username" ref={register('username', {required: true})}/>       
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={register('password', {required: true})} />       
            </label>
            <input type="submit" value="login"/>
          </form>
      </div>
    )
  }


export default Header;