import React from 'react';
import Person from './Person/Person';

// list of person components
const Persons = props => {
    console.log('[Persons.js] rendering...');
    return props.person.map((person, index) => {

        // use 'bind' and never 'this.switchNameHandler('Marx')' 
        // alternativelly to bind uses: '() => this.switchNameHandler()', though, not best practice
        // wraps person, to check/prevent for errors
        return (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}

                clicked={props.clicked.bind(this, index)}
                changed={event => props.changed(event, person.id)} />
        );
        //<ErrorBoundary></ErrorBoundary> would wrap Person component
    });
}

export default Persons;