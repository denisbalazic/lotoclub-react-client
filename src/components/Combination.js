import React, { Component } from "react";
import Number from "./Number";

export default class Combination extends Component {
  render() {
    const { combination } = this.props;
    return (
      <div className="combination-display">
        {combination.mainNums.map((n) => (
          <Number number={n} />
        ))}
        {combination.euroNums.map((n) => (
          <Number number={n} />
        ))}
      </div>
    );
  }
}
