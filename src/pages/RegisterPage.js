import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import authService from "../service/auth";

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    passcode: "",
    registrationSuccess: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    //TODO: validateInputs
    await authService.register({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      passcode: this.state.passcode,
    });
    //TODO: setState
    this.props.history.push("/combinations");
  };

  render() {
    const { username, email, password, password2, passcode } = this.state;
    return (
      <main>
        <i className="fas fa-dice-d20"></i>
        <form id="form" action="">
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
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={this.handleChange}
            />
            <small>Error message</small>
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
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password2">Confirm password</label>
            <input
              id="password2"
              type="password"
              name="password2"
              placeholder="Repeat password"
              value={password2}
              onChange={this.handleChange}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="passcode">Passcode</label>
            <input
              id="passcode"
              type="text"
              name="passcode"
              placeholder="Enter passcode"
              value={passcode}
              onChange={this.handleChange}
            />
            <small>Error message</small>
          </div>
          <button id="submit-btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <i className="fas fa-hand-holding-usd"></i>
        <i className="fas fa-handshake"></i>
      </main>
    );
  }
}

export default withRouter(RegisterPage);
