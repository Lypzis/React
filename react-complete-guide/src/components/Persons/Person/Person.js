import React from 'react';
//import Radium from 'radium';
import personClasses from'./Person.css';

const person = props => {
    console.log('[Person.js] rendering...');

/* Only for testing the error boundary
    const rnd = Math.random();

    if(rnd > .7) {
        throw new Error('Random Stupidity Elected');
    }
*/
    return (
        <div className={personClasses.Person} >
            <p onClick={props.clicked} className={personClasses.paragraph}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person; //Radium(person)