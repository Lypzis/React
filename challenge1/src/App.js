import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      {name: 'unknown'},
      {name: 'unknown'},
      {name: 'Victor'},
    ]
  }

  nameEventHandler = event => {
    this.setState({
      username: [
        {name: event.target.value},
        {name: 'unknown'},
        {name: 'Victor'},
      ]
    });
  }

  render() {

    return (
      <div className="App">
        <UserInput change={this.nameEventHandler} name={this.state.username[0].name}/>
        <UserOutput name={this.state.username[0].name}/>
        <UserOutput name={this.state.username[1].name}/>
        <UserOutput name={this.state.username[2].name}/>
      </div>
    );
  }
}

export default App;
