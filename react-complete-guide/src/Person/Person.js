import React from 'react';
import './Person.css';

const person = props => {
    //{Math.floor((Math.random() * 100))}, random age age
    return <p className="paragraph">I'm {props.name} and I am {props.age} years old!</p>
}

export default person;