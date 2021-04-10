import React from 'react';
import './style.css';


class Counter extends React.Component {
    state = {
        count: 0
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    reset = () => {
        this.setState({count: 0});
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div className="counter">
                <h2 className="counter-text">
                    {this.state.count}
                </h2>

                <div className="counter-actions">
                    <button onClick={this.decrement}>
                        Decrement -
                    </button>

                    <button onClick={this.reset}>
                        Reset
                    </button>

                    <button onClick={this.increment}>
                        Increment +
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;
