import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import appClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  // optional
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    // old syntax of declaring state
    /*
    this.state = {
      // array of objects
      person: [
        { id: 'aaa', name: 'Max', age: 28 },
        { id: 'aab', name: 'Manu', age: 29 },
        { id: 'abb', name: 'Stephanie', age: 27 }
      ],
      otherState: 'some other value hey',
      showPersons: false
    } */
  }

  // only available in class based components
  // an state object, use it responsibly
  // the other option to this are 'HOOKS'
  // modern syntax of decaring state.
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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);

    return state;
  }

  // legacy, use the above!
  /*
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount  yay! :D');
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
    console.log('[App.js] render')

    // for pseudo selectors in inline-styles, intall 'radium' package

    let persons = null;

    // the persons list block, default is null
    if (this.state.showPersons) {
      persons = ( //always use map (the array function, not Map, if you know what I mean ;) ) to render lists
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      // this is not html, it's .jsx :D
      // Style root is for wrapping the component, for 'radium', used in the main component
      //<StyleRoot>  // appClasses is now like an object  // button --> style={style}
      <div className={appClasses.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.person}
          show={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {
          // cannot use if statements inside here, so this is how its done
          persons
        }
      </div>
      //</StyleRoot>
    );
  }
}

export default App; //Radium(App)
