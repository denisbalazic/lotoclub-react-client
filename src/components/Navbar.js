import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { visibility, toggleNavigation } = this.props;
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
            <NavLink id="logout-btn" to="/">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
