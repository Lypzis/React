import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // only available in class based components
  // an state object, use it responsibly
  // the other option to this are 'HOOKS'
  state = {
    // array of objects
    person: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value hey'
  }

  switchNameHandler = newName => {
    //console.log('I have been clicked :v');

    // don't do this this.state.person[0].name = 'Maximilian';

    // will only update 'person' state
    this.setState({
      person: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }
 
  nameChangedHandler = event => {
    this.setState({
      person: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  // array destructuring
  /* if turning this class into a function 'hook'
  const [ personsState, setPersonsState] = useState({
    // array of objects
    person: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: 'some other value hey'
  });


  const [ otherState, setOtherState ] = useState('My other state');

  console.log(personsState, otherState);

  console.log(personsState);

  const switchNameHandler = () => {
    //console.log('I have been clicked :v');
  
    // don't do this this.state.person[0].name = 'Maximilian';
  
    // old state will be replaced by this, important note!
    setPersonsState({
      person: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState
    });
  } */

  render() {
    return (
      // this is not html, it's .jsx :D
      // use 'bind' and never 'this.switchNameHandler('Marx')' 
      // alternativelly to bind uses: '() => this.switchNameHandler()', though, not best practice
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!! :O</p>
        
        <button onClick={() => this.switchNameHandler('Unknown')}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Max!')}
        >My Hobbies: Racing.</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
