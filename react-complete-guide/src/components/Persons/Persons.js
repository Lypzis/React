import React, {Component} from 'react';
import Person from './Person/Person';

// list of person components
class Persons extends Component {
   /* 
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

    //componentWillReceiveProps(props) {
    //  console.log('[Persons.js] componentWillReceiveProps', props);
    //}

    shouldComponentUpdate(prevState, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
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