import React, { Component } from "react";
import Combination from "./Combination";

export default class UserCombinations extends Component {
  render() {
    const { username, combinations } = this.props;
    return (
      <div className="combination">
        <h3 className="combination-heading">{username}</h3>
        {combinations.map((comb, index) => (
          <Combination key={index} combination={comb} />
        ))}
      </div>
    );
  }
}
