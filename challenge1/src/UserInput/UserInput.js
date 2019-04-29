import React from 'react';

import './UserInput.css';

const style = {
    border: 'solid 2px blue',
    padding: '2rem',
    margin: '3rem'
  }

const UserInput = props => {

    return (
        <div style={style} className="UserInput">
            <input className="input" type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default UserInput;