import React, { useState } from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import './css/Blocks.css';
import Questions from './Questions';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';


function App(){
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='topLeftBox'> 
          <LoginBox />
          <RegisterBox />
        </div>
        <div className='midBox'>
          <Questions />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
