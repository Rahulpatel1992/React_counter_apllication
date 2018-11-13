import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementHandle = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementHandle = () => {
    this.setState({
      count: Math.max(0, this.state.count - 1)
    });
  };

  resetHandle = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandle}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrementHandle}>Decrement</button>
        <br />
        <button onClick={this.resetHandle}>Reset</button>
      </div>
    );
  }
}

export default counter;
