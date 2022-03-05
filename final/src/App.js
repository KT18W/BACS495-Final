import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import treasure from './images/treasure.jpg';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <body>
          <img className="Pic" src={treasure} alt="Treasure Chest" />
        </body>
        <Footer />
      </div>
    );
  }
}

export default App;
