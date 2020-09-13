import React, { Component } from "react";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import "./App.css";

// This calculator app can add subtract divide and multiply numbers
// We also have an equals sign

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "CE") {
      this.reset();
    } else if (button === "+/-") {
      this.setState({
        result: eval(this.state.result) * -1,
      });
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>REACT CALCULATOR</h1>
        <Result result={this.state.result} />
        <Buttons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
