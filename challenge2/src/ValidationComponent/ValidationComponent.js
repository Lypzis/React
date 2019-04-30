import React from 'react';

const ValidationComponent = props => {
    let output = null;

    output = props.length >= 5 ? <p>Text long enough!</p> : <p>Text too short!</p>;

    return (
        <div>
            {output}
        </div>
    );
}

export default ValidationComponent;