import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import appClasses from './App.css';
import Person from './Person/Person';

class App extends Component {
  // only available in class based components
  // an state object, use it responsibly
  // the other option to this are 'HOOKS'
  state = {
    // array of objects
    person: [
      { id: 'aaa', name: 'Max', age: 28 },
      { id: 'aab', name: 'Manu', age: 29 },
      { id: 'abb', name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value hey',
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    //const persons = this.state.person.slice(); // slice without argument will simply make a copy of the array, good practice :D
    // or use spread operator to make a copy with the objects of the older array, creating a new one
    const persons = [...this.state.person]; // only for arrays!
    persons.splice(personIndex, 1); // removes the element of respective index, from the copy array
    this.setState({ person: persons }); // updates state with the new array
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(person => person.id === id); // find respective person id

    //const person = {...this.state.person[personIndex]}; // makes a copy of the respective object
    //person.name = event.target.value; // change the respective object name by the target value
    //const persons = [...this.state.person]; // copy state persons array
    //persons[personIndex] = person; // update respective person from persons array with new person object information

    // OR
    const persons = [...this.state.person]; // copy state person array
    persons[personIndex].name = event.target.value; // change the respective person object name from the copy array by the target value

    this.setState({ person: persons }); // update state with the new information
  }

  // if showing, set to false, else to true, denying itself
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // Render elements to the dom
  render() {
    // inline style
    /*const style = {
      backgroundColor: 'green',
      color: '#fff',
      fontSize: '2rem',
      border: '1px solid blue',
      padding: '.8rem',
      cursor: 'pointer',
      outline: 'none',

      // REMEMBER: pseudo selectors are only available if installing 'radium'
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }*/

    // for pseudo selector in inline-styles, intall 'radium' package

    let persons = null;
    let btnClass = '';

    // the persons list block, default is null
    if (this.state.showPersons) {
      persons = ( //always use map (the array function, not Map, if you know what I mean ;) ) to render lists
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      // dinamically changes background of the button, which is the one recieving the inline style object
      //style.backgroundColor = 'red';
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/

      btnClass = appClasses.red;
    }

    // creating a class list
    let classes = [];

    // dinamic classes
    if (this.state.person.length <= 2) {
      classes.push(appClasses.red);
    }

    if (this.state.person.length < 2) {
      classes.push(appClasses.bold);
    }

    return (
      // this is not html, it's .jsx :D
      // use 'bind' and never 'this.switchNameHandler('Marx')' 
      // alternativelly to bind uses: '() => this.switchNameHandler()', though, not best practice
      // Style root is for wrapping the component, for 'radium', used in the main component
      //<StyleRoot>  // appClasses is now like an object  // button --> style={style}
      <div className={appClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!! :O</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {
          // cannot use if statements inside here, so this is how its done, shows list if 'true',
          // else, shows nothing ('null')
          persons
        }
      </div>
      //</StyleRoot>
    );
  }
}

// 'radium' style will wrap the component from now on, for styling ;D 
export default App; //Radium(App)
