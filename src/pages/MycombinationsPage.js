import React, { Component } from "react";
import Header from "../components/Header";
import Combination from "../components/Combination";
import NumbersTable from "../components/NumbersTable";

export default class MycombinationsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        Mycombinations
        <Combination />
        <NumbersTable />
      </div>
    );
  }
}
