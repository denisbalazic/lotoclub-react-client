import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { authService } from "../service/auth";

export default class LoginPage extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    error: "",
    shouldRedirect: false,
  };

  handleChange = (e) => {
    const user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user: user });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await authService.login(this.state.user);
    console.log(res);
    if (res.success) {
      //TODO: handle successful login with message
      this.setState({ shouldRedirect: true });
    } else {
      this.setState({ error: res.error.message });
    }
    this.setState({ user: { username: "", password: "" } });
  };

  render() {
    const { username, password } = this.state.user;
    if (this.state.shouldRedirect) {
      return <Redirect to="/combinations" />;
    } else {
      return (
        <main>
          <i className="fas fa-dice-d20"></i>
          <form id="form" action="" onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
              />
              <small>{this.state.error}</small>
            </div>
            <button id="submit-btn">Submit</button>
          </form>
          <i className="fas fa-hand-holding-usd"></i>
          <i className="fas fa-handshake"></i>
        </main>
      );
    }
  }
}
