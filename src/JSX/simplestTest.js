import React from 'react';
import ReactDOM from 'react-dom';

//Wymaga zmiany w index.js w src i serwera 'npm start'

class Test extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));