import React from 'react';

// React.createContext makes it possible to jump steps when passing down properties, like 'a' to 'd'
// avoiding unecessary redundancy and increasing usability of components.
// especially usefull in long chains!
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
}); // object in this case, can also be an array, string, number, etc. 
    // This is just a default filler for the 'real' values that we want to pass

export default authContext;