import React from 'react';
import './Person.css';

const person = props => {
    //{Math.floor((Math.random() * 100))}, random age age
    return (
        <div className="Person">
            <p onClick={props.click} className="paragraph">I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person;