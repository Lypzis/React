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
    otherState: 'some other value hey',
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    //const persons = this.state.person.slice(); // slice without argument will simply make a copy of the array, good practice :D
    // or use spread operator to make a copy with the objects of the older array, creating a new one
    const persons = [...this.state.person]; // only for arrays!
    persons.splice(personIndex, 1); // removes the element of respective index, from the copy array
    this.setState({person: persons}); // updates state with the new array
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

  // if showing, set to false, else to true, denying itself
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // Render elements to the dom
  render() {
    // inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '.8rem',
      cursor: 'pointer'
    }

    let persons = null;
    // the persons list block, default is null
    if (this.state.showPersons)
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );

    return (
      // this is not html, it's .jsx :D
      // use 'bind' and never 'this.switchNameHandler('Marx')' 
      // alternativelly to bind uses: '() => this.switchNameHandler()', though, not best practice
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!! :O</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          // cannot use if statements inside here, so this is how its done, shows list if 'true',
          // else, shows nothing ('null')
          persons
        }
      </div>
    );
  }
}

export default App;
