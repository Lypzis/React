import React, { useEffect, useRef } from 'react';

import cockpitClasses from './Cockpit.css';

// the "main" component, first to show
const Cockpit = props => {
    //console.log('[Cockpit.js] rendering...');
    const toggleBtnRef = useRef(null); // for referecing functional components
    //let toggleBtnRef; 

    // IMPORTANT: runs after every render cycle!
    useEffect(() => {
        //console.log('[Cockpit.js] useEffect');

        // will automatically click(toggle) the button, after it has been created
        //toggleBtnRef.click(); 
        toggleBtnRef.current.click();

        // Http request simulation...
        /*
        setTimeout(() => { // const timer = 
            alert('Saved data to cloud!');
        }, 1000); */

        return () => {
            //clearTimeout(timer);
            //console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []); //[props.persons] will be called only on a change in persons list(in this case, otherwise, anything in the array),

    useEffect(() => {
        //console.log('[Cockpit.js] 2nd useEffect');
        return () => null;//console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }); // withoud 2nd argument, it has no control of when it should run,so it will update for every lifecycle.

    // creating a class list
    let classes = [];

    // dinamic classes
    if (props.personsLenght <= 2) {
        classes.push(cockpitClasses.red);
    }

    if (props.personsLenght < 2) {
        classes.push(cockpitClasses.bold);
    }

    let btnClass = '';

    if (props.show)
        btnClass = cockpitClasses.red;

    // toggleBtn => toggleBtnRef = toggleBtn
    return (
        <div className={cockpitClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!!! :O</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggle}>
                Toggle Persons
            </button>
            <button onClick={props.login}>
                Log in
            </button>
        </div>
    )
};

export default React.memo(Cockpit); // React will only re-render this component if it changes, memorizing its current state.