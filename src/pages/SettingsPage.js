import React, { Component } from "react";
import NumbersTable from "../components/NumbersTable";
import Combination from "../components/Combination";

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        Settings
        <Combination />
        <NumbersTable />
      </div>
    );
  }
}
