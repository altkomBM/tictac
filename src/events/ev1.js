import React from 'react';

class Football extends React.Component {
    shoot() {
        alert("Great Shot!");
    }
    render() {
        console.log(1);
        console.log(1);
        return    (

            <button onClick={this.shoot}>Take the shsssot!</button>

        )  ;
        console.log(1);
    }
}