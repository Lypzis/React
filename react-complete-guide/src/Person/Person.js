import React from 'react';
//import Radium from 'radium';
import './Person.css';

const person = props => {
    /*
    const style = { //inline media query, only available with 'radium'
        '@media (min-width: 500px)': { // above 500px, width will always be 450px;
            width: '450px'
        }
    }
*/
    //{Math.floor((Math.random() * 100))}, random age age
    return ( //style={style}
        <div className="Person" >
            <p onClick={props.click} className="paragraph">I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person; //Radium(person)