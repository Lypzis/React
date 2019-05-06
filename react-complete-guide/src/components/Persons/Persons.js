import React from 'react';
import Person from './Person/Person';

// list of person components
const Persons = props =>  
    props.person.map((person, index) => {
        // wraps person, to check/prevent for errors
        return  <Person
            key={person.id}
            name={person.name}
            age={person.age}

            clicked={props.clicked.bind(this, index)}
            changed={event => props.changed(event, person.id)} />
        //<ErrorBoundary></ErrorBoundary> would wrap Person component
      });

export default Persons;