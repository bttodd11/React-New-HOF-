import React, { Component } from 'react';
import './Update.css';

class Update extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
      <div className="inputs">
        <h1>Gary Sheffield Should Be In The Hall of Fame Petition</h1>
        First Name: <input type="text" value="" />
        <br></br>
        Last Name: <input type="text" value="" />
        <br></br>
        City: <input type="text" value="" />
        <br></br>
        State: <input type="text" value="" />
        <br></br>
        <input type="submit" value="Submit" />
      </div>
      </div>
    );
  }
}

export default Update;
