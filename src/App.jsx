import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "lisbon" };
    this.handleFeatching = this.handleFeatching.bind(this);
  }
  handleFeatching() {
    console.log("i am featching ");
  }
  render() {
    return (
      <div className="app">
        <h1>classy Weather </h1>
        <div>
          <input
            type="text"
            placeholder="location search ..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.handleFeatching}>Get Weather</button>
      </div>
    );
  }
}
export default App;
