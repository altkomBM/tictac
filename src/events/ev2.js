import React from 'react';

class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);
    }

    render() {
        return (
            <button
                onClick={(ev) => this.shoot("Goal", ev)}
            >Take the shot!</button>
        );
    }
}