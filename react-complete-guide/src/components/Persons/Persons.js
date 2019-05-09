import React, { PureComponent } from 'react';
import Person from './Person/Person';

// list of person components
class Persons extends PureComponent { // Pure component automatically implement 'shouldComponentUpdate'
    /* 
     static getDerivedStateFromProps(props, state){
         console.log('[Persons.js] getDerivedStateFromProps');
         return state;
     }*/

    //componentWillReceiveProps(props) {
    //  console.log('[Persons.js] componentWillReceiveProps', props);
    //}

    // Performance boost, as the name suggests, component will only update if it suffers some change
    /* Use PureComponent if it is necessary to verify too much properties
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.person !== this.props.person ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked)
            return true; // update component
        else
            return false; // don't update component
    } */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.person.map((person, index) => {

            // use 'bind' and never 'this.switchNameHandler('Marx')' 
            // alternativelly to bind uses: '() => this.switchNameHandler()', though, not best practice
            // wraps person, to check/prevent for errors
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}

                    clicked={this.props.clicked.bind(this, index)}
                    changed={event => this.props.changed(event, person.id)} />
            );
            //<ErrorBoundary></ErrorBoundary> would wrap Person component
        });
    }

}

export default Persons;