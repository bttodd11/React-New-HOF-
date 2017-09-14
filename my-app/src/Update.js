import React, { Component } from 'react';
import './Update.css';

const getDefaultFormValues = () => ({
  firstName: '',
  lastName: '',
  city: '',
  state: '',
});


class Update extends Component {
constructor(props){
super();
this.state = {
  form: getDefaultFormValues(),
  submissions:[],
};

  this.handleFormChange = this.handleFormChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleFormChange(event) {
  const form = this.state.form;
  form[event.target.name] = event.target.value;
  this.setState({form});
}

handleSubmit(event){
  event.preventDefault();
  const submissions = this.state.submissions;
  submissions.push(this.state.form);
  this.setState({submissions, form: getDefaultFormValues()});
}


  render() {
    const form = this.state.form;
    return (
    <div className="App">
      <div className="App-header" />
      <form onChange ={this.handleFormChange} onSubmit={this.handleSubmit}>
      <div className="inputs">
        <h1>Gary Sheffield Should Be In The Hall of Fame Petition</h1>
        First Name: <input type="text" name="firstName" value={form.firstName}  />
        <br></br>
        Last Name: <input type="text" name="lastName" value={form.lastName} />
        <br></br>
        City: <input type="text" name="city" value={form.city} />
        <br></br>
        State: <input type="text" name="state" value={form.state} />
        <br></br>
        <input type="submit" value="Submit" />
      </div>
      </form>
      <ol>
{this.state.submissions.map((x,index) => (
  <li key={index}>
    {x.firstName}  {x.lastName} - {x.city} , {x.state}
  </li>
))}
      </ol>
    </div>

    );
  }
}

export default Update;
