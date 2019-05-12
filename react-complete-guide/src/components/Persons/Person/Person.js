import React, { Component } from 'react'; // Fragment to replace Aux, the high order component
//import Radium from 'radium';
import personClasses from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    

    /* Only for testing the error boundary
        const rnd = Math.random();
    
        if(rnd > .7) {
            throw new Error('Random Stupidity Elected');
        }
    */
    render() {
        //console.log('[Person.js] rendering...');
        return ( // className={personClasses.Person} 
            <Aux>
                <p onClick={this.props.clicked} className={personClasses.paragraph}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} />
            </Aux>
        );
    }

}

export default withClass(Person, personClasses.Person); //Radium(person)