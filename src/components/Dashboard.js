import React from "react";

class Clock extends React.Component {
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
    return <h1>The time is {this.state.date.toLocaleString()}</h1>;
  }
}

export default Clock;
