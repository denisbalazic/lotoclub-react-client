import React, { Component } from "react";
import Header from "../components/Header";
import NumbersTable from "../components/NumbersTable";
import Combination from "../components/Combination";

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        Settings
        <Combination />
        <NumbersTable />
      </div>
    );
  }
}
