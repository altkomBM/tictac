import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a Car!</h2>;
    }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));