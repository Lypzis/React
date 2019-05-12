import React from 'react';

// high order component with class that wrap its children, quite obviously :D.
// Now it has become a function that returns a component
const withClass = (WrappedComponent, className) => {
    return props => ( // breaking into minor pieces
        <div className={className}>
            <WrappedComponent {...props} /> 
        </div>
    );  // spreading props will take all properties from the children objects redistribute accordingly. 
        // without it, they will not show correctly.
}

export default withClass;