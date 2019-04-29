import React from 'react';

import './UserOutput.css';

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia non natus! Aut possimus nobis dolorem dolorum illum praesentium, ab iusto quo, et facere delectus qui laudantium expedita eius dicta?</p>
            <p className="author">Author: {props.name}</p>
        </div>
    );
}

export default UserOutput;