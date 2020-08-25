import React from 'react';

export interface MyComponentProps {}

interface State {
    clicked: number;
}

export default class Clicked extends React.Component<MyComponentProps, State> {
    constructor(props) {
        super(props);

        this.state = {
            clicked: 0,
        };
    }

    onClick = () => {
        this.setState({ clicked: this.state.clicked + 1 });
    };

    render() {
        return (
            <button onClick={this.onClick}>
                Clicked {this.state.clicked} times.
            </button>
        );
    }
}
