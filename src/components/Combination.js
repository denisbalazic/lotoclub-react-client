import React, { Component } from "react";
import Number from "./Number";

export default class Combination extends Component {
  render() {
    const { combination } = this.props;
    return (
      <div className="combination-display">
        {combination.mainNums.map((n, index) => (
          <Number key={index} number={n} />
        ))}
        {combination.euroNums.map((n, index) => (
          <Number key={index} number={n} />
        ))}
      </div>
    );
  }
}
