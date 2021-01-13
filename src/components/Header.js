import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authService } from "../service/auth";

export default class Header extends Component {
  render() {
    const { toggleNavigation } = this.props;
    return (
      <header>
        <div id="logo">
          <Link to="/">Lotoklub#1</Link>
        </div>
        {!authService.isLoggedIn() ? (
          <div id="menu">
            <ul>
              <Link to="/login">
                <i className="fas fa-user-ninja"></i>
              </Link>
              <Link to="/register">
                <i className="fas fa-user-plus"></i>
              </Link>
            </ul>
          </div>
        ) : (
          <div id="menu">
            <ul>
              <li onClick={toggleNavigation}>
                <i className="fas fa-bars"></i>
              </li>
            </ul>
          </div>
        )}
      </header>
    );
  }
}
