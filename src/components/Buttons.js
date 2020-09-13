import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div class="calulator">
        <div class="functions"></div>

        <div class="button-row">
          <button
            name="CE"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            CE
          </button>
          <button
            name="+/-"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            +/-
          </button>
          {/* <button
            name="%"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            %
          </button> */}
          <button
            name="/"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            /
          </button>
        </div>
        <div class="button-row">
          <button
            name="7"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            7
          </button>
          <button
            name="8"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            8
          </button>
          <button
            name="9"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            9
          </button>
          <button
            name="*"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            x
          </button>
        </div>
        <div class="button-row">
          <button
            name="4"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            4
          </button>
          <button
            name="5"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            5
          </button>
          <button
            name="6"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            6
          </button>
          <button
            name="-"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            -
          </button>
        </div>
        <div class="button-row">
          <button
            name="1"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            1
          </button>
          <button
            name="2"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            2
          </button>
          <button
            name="3"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            3
          </button>
          <button
            name="+"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            +
          </button>
        </div>
        <div class="button-row-u">
          <button
            name="0"
            onClick={(e) => this.props.onClick(e.target.name)}
            class="number-button"
          >
            0
          </button>
          <button name="." onClick={(e) => this.props.onClick(e.target.name)}>
            .
          </button>
          <button
            name="="
            onClick={(e) => this.props.onClick(e.target.name)}
            class="functioning-button"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
