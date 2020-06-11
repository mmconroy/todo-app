import React from "react";
import { Link } from "react-router-dom";

const flexCenter = {
  display: "flex",
  flexDirection: "column",
  JustifyContent: "center",
  alignItems: "center",
};

class Dashboard extends React.Component {
  state = {
    date: new Date(),
  };
  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="dashboard__wrapper" style={flexCenter}>
        <main className="container__main">
          <h1 className="dashboard-title">Welcome to todo.ly</h1>
          <h1 className="dashboard-time">
            It's {this.state.date.toDateString()}
          </h1>
          <div className="dashboard__links__container">
            <Link to="/todolist">
              <p className="dashboard-link">Todolist</p>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
