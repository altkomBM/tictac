import React from 'react';

class Football extends React.Component {
    shoot() {
        alert("Great Shot!");
    }
    render() {
        console.log(2122);
        return  (
            <button onClick={this.shoot}>asdTake dasfasdasfadfsthe shot!</button>
         );
        console.log(2122);
    }
}