import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDate()
        };
    }
    render() {
        return (
            <p className="App-clock">
                Текущее время: {this.state.time}.
            </p>
        );
    }
}

export default Clock;