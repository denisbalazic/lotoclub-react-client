import React, { Component } from "react";
import NumbersTable from "../components/NumbersTable";

export default class TablePage extends Component {
  render() {
    return (
      <div>
        Table
        <NumbersTable />
      </div>
    );
  }
}
