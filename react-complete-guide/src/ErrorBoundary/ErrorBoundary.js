import React, {Component} from 'react';

class ErrorBoundary extends Component { // only use error boundaries on components that you know that might fail!
    state = {
        hasError: false,
        errorMessage: ''
    }

    // this will fire if we get an error inside this boundarys
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        // if something is wrong, there is an error in the children wrapped, shows this custom message
        if(this.state.hasError)
            return (
                <div>
                    <h1>Something went wrong!</h1>
                    <h2>Please reload the page.</h2>
                </div>
            );
        else return this.props.children; // else, shows what would normally show
    }
}

export default ErrorBoundary;