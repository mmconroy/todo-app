import React from "react";

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
    event.preventDeafault();
    if (this.isValidForm) {
      this.props.history.push("/Dashboard");
    } else {
      this.setState({ error: "Please enter a valid username and/or password" });
    }
  };
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Login;
