import React, { Component } from "react";
import Header from "../components/Header";
import NumbersTable from "../components/NumbersTable";

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <Header />
        Table
        <NumbersTable />
      </div>
    );
  }
}
