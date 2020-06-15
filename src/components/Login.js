import React from "react";
import { Link, withRouter } from "react-router-dom";

const validUserInfo = {
  email: "test@kenzie.academy",
  password: "test123",
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  isValidForm = () => {
    return (
      this.state.email === validUserInfo.email &&
      this.state.password === validUserInfo.password
    );
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.email === "test@kenzie.academy" &&
      this.state.password === "test123"
    ) {
      this.props.history.push("/Dashboard");
    } else {
      this.setState({ error: "Incorrect username and/or password." });
    }
  };

  render() {
    return (
      <div className="login-wrapper">
        <p className="login-title">Login</p>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form className="flex-col" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div className="reg-button">
          <p>Not Registered?</p>
          <Link className="taskGoBackLink" to="/Register">
            Register for an account
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
