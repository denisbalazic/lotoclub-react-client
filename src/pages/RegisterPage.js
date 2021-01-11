/**
 * TODO: Handle successful registartion with message
 * TODO: Handle server errors and connection errors with message
 * TODO: Create helper module for validating form inputs
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { authService } from "../service/auth";

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

class RegisterPage extends Component {
  state = {
    fields: {
      username: "",
      email: "",
      password: "",
      password2: "",
      passcode: "",
    },
    errors: {},
    registrationSuccess: false,
    shouldRedirect: false,
  };

  validate = () => {
    const { username, email, password, password2, passcode } = this.state.fields;
    const errors = {};
    if (username.length > 16) errors["username"] = "Username should have less then 16 characters";
    if (username.length < 3) errors["username"] = "Username should have at least 3 characters";
    if (username === "") errors["username"] = "Username is required";
    if (!checkEmail(email)) errors["email"] = "Email is not valid";
    if (email === "") errors["email"] = "Email is required";
    if (password.length < 6) errors["password"] = "Password should have at least 6 characters";
    if (password === "") errors["password"] = "Password is required";
    if (password !== password2) errors["password2"] = "Passwords do not match";
    if (password2 === "") errors["password2"] = "Password confirmation is required";
    if (passcode === "") errors["passcode"] = "Passcode is required";
    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };

  setResponseErrors = (msg) => {
    const errors = {};
    const field = msg.split(":")[0];
    if (field === "email") errors["email"] = "There is user with this email";
    if (field === "username") errors["username"] = "Username is taken";
    if (field === "passcode") errors["passcode"] = "Passcode is incorect";
    this.setState({ errors: errors });
  };

  handleChange = (e) => {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields: fields,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const isValidated = this.validate();
    if (isValidated) {
      const res = await authService.register({
        username: this.state.fields.username,
        password: this.state.fields.password,
        email: this.state.fields.email,
        passcode: this.state.fields.passcode,
      });
      if (res.success) {
        //TODO: handle successful registration with message
        this.setState({ shouldRedirect: true });
      } else {
        this.setResponseErrors(res.error.message);
      }
    }
  };

  render() {
    const { username, email, password, password2, passcode } = this.state.fields;
    if (this.state.shouldRedirect) {
      return <Redirect to="/combinations" />;
    } else {
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
              <div className="error-msg">{this.state.errors.username}</div>
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
              <div className="error-msg">{this.state.errors.email}</div>
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
              <div className="error-msg">{this.state.errors.password}</div>
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
              <div className="error-msg">{this.state.errors.password2}</div>
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
              <div className="error-msg">{this.state.errors.passcode}</div>
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
}

export default RegisterPage;
