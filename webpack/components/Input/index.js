import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          className="hz-input"
          placeholder={this.props.placeholder || "请输入"}
        />
      </div>
    );
  }
}
