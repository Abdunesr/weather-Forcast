import React from "react";
import { Component } from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 5 };
  }
  // Fixed typo here
  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.Count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default function App() {
  return <Count />;
}
