import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CombinationsPage from "./pages/CombinationsPage";
import MycombinationsPage from "./pages/MycombinationsPage";
import TablePage from "./pages/TablePage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";

export default class App extends Component {
  state = {
    isLogged: false,
    navigationOn: false,
  };
  toggleNavigation = () => {
    this.setState((prevState) => ({
      navigationOn: !prevState.navigationOn,
    }));
  };
  render() {
    // if (!this.state.isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div>
        <Header isLogged={this.state.isLogged} toggleNavigation={this.toggleNavigation} />
        <Navbar visibility={this.state.navigationOn} toggleNavigation={this.toggleNavigation} />
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/register" render={() => <RegisterPage />} />
          <Route exact path="/login" render={() => <LoginPage />} />
          <PrivateRoute exact path="/combinations" component={CombinationsPage} />
          <PrivateRoute exact path="/mycombinations" component={MycombinationsPage} />
          <PrivateRoute exact path="/table" component={TablePage} />
          <PrivateRoute exact path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    );
    // }
  }
}
