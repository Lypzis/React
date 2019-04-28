import React from 'react';
import './Person.css';

const person = props => {
    //{Math.floor((Math.random() * 100))}, random age age
    return (
        <div className="Person">
            <p onClick={props.click} className="paragraph">I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;