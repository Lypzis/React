import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // only available in class based components
  // an state object, use it responsibly
  // the other option to this are 'HOOKS'
  /*state = {
    // array of objects
    person: [
      { name:"Max", age:28 },
      { name:"Manu", age:29 },
      { name:"Stephanie", age:26 },
    ],
    otherState: 'some other value hey'
  }

  switchNameHandler = () => {
    //console.log('I have been clicked :v');

    // don't do this this.state.person[0].name = 'Maximilian';

    // will only update 'person' state
    this.setState({
      person: [
        { name:"Maximilian", age:28 },
        { name:"Manu", age:29 },
        { name:"Stephanie", age:27 }
      ]
    });
  }*/

  // array destructuring
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
  }

  //render() {
  return (
    // this is not html, it's .jsx :D
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!! :O</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age} />
      <Person name={personsState.person[2].name} age={personsState.person[2].age} />
    </div>
  );
  //}
}

export default App;
