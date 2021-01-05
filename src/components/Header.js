import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { isLogged, toggleNavigation } = this.props;
    return (
      <header>
        <div id="logo">
          <Link to="/">Lotoklub#1</Link>
        </div>
        {!isLogged ? (
          <div id="menu">
            <ul>
              <Link to="/login">
                <i class="fas fa-user-ninja"></i>
              </Link>
              <Link to="/register">
                <i class="fas fa-user-plus"></i>
              </Link>
            </ul>
          </div>
        ) : (
          <div id="menu">
            <ul>
              <li onClick={toggleNavigation}>
                <i class="fas fa-bars"></i>
              </li>
            </ul>
          </div>
        )}
      </header>
    );
  }
}
