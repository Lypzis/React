import React, { Component } from 'react';
//import Radium from 'radium';
import personClasses from './Person.css';

class Person extends Component {
    

    /* Only for testing the error boundary
        const rnd = Math.random();
    
        if(rnd > .7) {
            throw new Error('Random Stupidity Elected');
        }
    */
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={personClasses.Person} >
                <p onClick={this.props.clicked} className={personClasses.paragraph}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} />
            </div>
        );
    }

}

export default Person; //Radium(person)