import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Register extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    message: "",
    errors: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    isValid: false,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let error = "";
    switch (name) {
      case "email":
        if (value.length > 36) {
          error = "Email address can be no more than 36 characters long";
        } else if (!validEmailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "password":
        if (value.length > 16) {
          error = "Password must be between 8 and 16 characters long";
        }
        break;
      case "password":
        if (value.length < 8) {
          error = "Password must be between 8 and 16 characters long";
        }
        break;
      case "passwordConfirmation":
        if (value !== this.state.password) {
          error = "Passwords must be matching";
        }
    }
    this.setState((state) => {
      return {
        [name]: value,
        errors: { ...state.errors, [name]: error },
      };
    }, this.validateForm);
  };
  validateForm = () => {
    let hasErrors = false;
    for (let property in this.state.errors) {
      if (this.state.errors[property]) {
        hasErrors = true;
      }
    }
    let isValid =
      this.state.email &&
      this.state.password &&
      this.state.passwordConfirmation &&
      !hasErrors;
    this.setState({ isValid: Boolean(isValid) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValid) {
      this.props.history.push("/Dashboard");
    } else {
      this.setState({ message: "Please complete all forms" });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <p className="title">Create an Account</p>
        {this.state.message && <p>{this.state.message}</p>}
        <form onSubmit={this.handleSubmit}>
          {this.state.errors.email && (
            <p class="error-message">{this.state.errors.email}</p>
          )}
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>
          {this.state.errors.password && (
            <p class="error-message">{this.state.errors.password}</p>
          )}
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </label>
          {this.state.errors.passwordConfirmation && (
            <p class="error-message">
              {this.state.errors.passwordConfirmation}
            </p>
          )}
          <label>
            Confirm Password:
            <input
              type="password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
            ></input>
          </label>

          <button onClick={this.handleSubmit}>Register</button>
        </form>
        <div className="reg-button">
          <p>Already Registered?</p>
          <Link className="taskGoBackLink" to="/Login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
