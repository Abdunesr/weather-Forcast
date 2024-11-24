import React from "react";
import { Component } from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 5 };
    this.handleIncerment = this.handleIncerment.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncerment() {
    this.setState((curCount) => {
      return { Count: curCount.Count + 1 };
    });
  }
  handleDecrement() {
    this.setState((curcount) => {
      return { Count: curcount.Count - 1 };
    });
  }

  // Fixed typo here
  render() {
    const date = new Date("june  27  2024");
    date.setDate(date.getDate() + this.state.Count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          [{date.toDateString()}] {this.state.Count}
        </span>
        <button onClick={this.handleIncerment}>+</button>
      </div>
    );
  }
}

export default function App() {
  return <Count />;
}
