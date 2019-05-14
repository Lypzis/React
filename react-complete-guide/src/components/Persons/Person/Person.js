import React, { Component } from 'react'; // Fragment to replace Aux, the high order component
//import Radium from 'radium';
import PropTypes from 'prop-types';

import personClasses from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);

        // no need to use an function in 'ref' if this is in place
        this.inputElementRef = React.createRef();
    }

    // Now it is possible to access the context within the class as 'this.context'
    // can ONLY be declared in class based components, unless using hooks :D
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus(); // will focus the input from the last mounted Person component
        console.log(this.context.authenticated);
    }

    /* Only for testing the error boundary
        const rnd = Math.random();
    
        if(rnd > .7) {
            throw new Error('Random Stupidity Elected');
        }
    */
    render() {
        //console.log('[Person.js] rendering...');
        // 'ref' is another special React property just like 'key'
        // also can be set as an anonymous function: ref={inputEl => this.inputElementRef = inputEl}
        return ( // className={personClasses.Person}
            // here, we consume the value of the values passed from the provider.
            // will have to pass 'context =>'  or this.context
            // Now the value passes "directly" from 'App.js' to 'Person.js' :D
            <Aux>
                {
                    this.context.authenticated ?
                        <p className={personClasses.paragraph}>Authenticated!</p> :
                        <p className={personClasses.paragraph}>Please, log in!</p>
                }
                <p onClick={this.props.clicked} className={personClasses.paragraph}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input ref={this.inputElementRef} type="text" onChange={this.props.changed} />
            </Aux>


        );
    }

}

// ensures that the correct type will be used, usefull for working in a team, where your code might be used incorrectly
Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, personClasses.Person); //Radium(person)