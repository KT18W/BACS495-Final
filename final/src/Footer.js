import React, { Component } from 'react'
import './css/Footer.css';

export class Footer extends Component {
  myname = 'Katie';
    render() {
      return <div>
        <h1>
          Welcome {this.myname}
        </h1>
      </div>;
    }
  }
  
  export default Footer;