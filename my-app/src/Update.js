import React, { Component } from 'react';
import './Update.css';

class Update extends Component {
constructor(props){
super(props);
this.state = {
  names: props.names};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event){
  alert('' + this.state.value);
  event.preventDefault();
}


  render() {
    return (
      <div className="inputs">
        <h1>Gary Sheffield Should Be In The Hall of Fame Petition</h1>
        <form onSubmit ={this.handleSubmit}>
        First Name: <input type="text" placeholder="First Name" value={this.state.value} onChange={this.handleChange}  />
        <br></br>
        Last Name: <input type="text" placeholder="Last Name" />
        <br></br>
        City: <input type="text" placeholder="City" ref="city" />
        <br></br>
        State: <input type="text" placeholder="State" ref="state" />
        <br></br>

        <button type="submit" value="Submit"> Submit </button>
      </form>
      </div>
    );
  }
}

export default Update;
