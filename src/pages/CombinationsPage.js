import React, { Component } from "react";
import Header from "../components/Header";
import UserCombinations from "../components/UserCombinations";

export default class CombinationsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        Combinations
        <UserCombinations />
      </div>
    );
  }
}
