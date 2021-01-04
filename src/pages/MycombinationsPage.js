import React, { Component } from "react";
import Combination from "../components/Combination";
import NumbersTable from "../components/NumbersTable";

export default class MycombinationsPage extends Component {
  render() {
    return (
      <div>
        Mycombinations
        <Combination />
        <NumbersTable />
      </div>
    );
  }
}
