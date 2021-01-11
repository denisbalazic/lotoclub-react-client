import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { authService } from "../service/auth";

export default class Navbar extends Component {
  state = {
    shouldLogout: false,
  };
  handleLogout = (e) => {
    e.preventDefault();
    authService.logout();
    this.setState({ shouldLogout: true });
  };
  render() {
    const { visibility, toggleNavigation } = this.props;
    if (this.state.shouldLogout) {
      return <Redirect to="/" />;
    } else {
      return (
        <nav className={visibility ? "" : "hidden"}>
          <i onClick={toggleNavigation} class="fas fa-times"></i>
          <ul>
            <li>
              <NavLink to="/mycombinations">MyCombinations</NavLink>
            </li>
            <li>
              <NavLink to="/combinations">Combinations</NavLink>
            </li>
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/">History</NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
}
