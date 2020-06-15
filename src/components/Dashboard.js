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
      <div className="dashboard-body">
        <main className="container__main">
          <div className="dashboard__wrapper">
            <h1 className="dashboard-title">Welcome to todo.ly</h1>
            <h1 className="dashboard-time">
              It's {this.state.date.toDateString()}
            </h1>
            <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
            <div className="dashboard__links__container">
              <Link to="/todolist">
                <p className="dashboard-link">Let's get at it!</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
