import React, { useEffect } from 'react';

import cockpitClasses from './Cockpit.css';

// the "main" component, first to show
const Cockpit = props => {
    console.log('[Cockpit.js] rendering...');

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');

        // Http request simulation...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        return () => console.log('[Cockpit.js] cleanup work in useEffect');
    }, []); //[props.persons] will be called only on a change in persons list(in this case, otherwise, anything in the array),
    
    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }); // withoud 2nd argument, it has no control of when it should run,so it will update for every lifecycle.

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