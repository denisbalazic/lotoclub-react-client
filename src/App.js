import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CombinationsPage from "./pages/CombinationsPage";
import MycombinationsPage from "./pages/MycombinationsPage";
import TablePage from "./pages/TablePage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";

export default class App extends Component {
  render() {
    // if (!this.state.isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/register" render={() => <RegisterPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/combinations" render={() => <CombinationsPage />} />
        <Route exact path="/mycombinations" render={() => <MycombinationsPage />} />
        <Route exact path="/table" render={() => <TablePage />} />
        <Route exact path="/settings" render={() => <SettingsPage />} />
      </div>
    );
    // }
  }
}
