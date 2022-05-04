import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Blocks from './Blocks';
import Users from './Users';
function App(){
  return (
    <div className="App">
      <Header />
      <Users />
      <Body />
      <Blocks />
      <Footer />
    </div>
  );
}
export default App;
