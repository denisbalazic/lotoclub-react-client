import React, { Component } from "react";

export default class Number extends Component {
  render() {
    const { number } = this.props;
    return <div className="number">{number || ""}</div>;
  }
}
