import React, { Component } from "react";

// This calculator app can add subtract divide and multiply numbers
// We also have an equals sign

class Result extends Component {
  render() {
    let { result } = this.props; 
    return (
      <div class="answer">
        <p>{result}</p>
      </div>
    );
  }
}

export default Result;
