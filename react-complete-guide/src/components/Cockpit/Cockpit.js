import React from 'react';

import cockpitClasses from './Cockpit.css';

// the "main" component, first to show
const Cockpit = props => {
    console.log('[Cockpit.js] rendering...')
    // creating a class list
    let classes = [];

    // dinamic classes
    if (props.persons.length <= 2) {
        classes.push(cockpitClasses.red);
    }

    if (props.persons.length < 2) {
        classes.push(cockpitClasses.bold);
    }

    let btnClass = '';

    if (props.show)
        btnClass = cockpitClasses.red;

    return (
        <div className={cockpitClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!!! :O</p>
            <button
                className={btnClass}
                onClick={props.toggle}
            >Toggle Persons</button>
        </div>
    )
};

export default Cockpit;