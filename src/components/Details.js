import React from "react";
import { withRouter, Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    form: { ...this.getTaskFromList() },
  };

  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState((state) => ({
      form: {
        ...state.form,
        [name]: value,
      },
    }));
  };

  findTaskById(id) {
    return this.props.form.id.find((task) => task.id === id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        form: { ...this.getTaskFromList() },
      });
    }
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.form);
  };

  getTaskFromList() {
    const itemId = this.props.match.params.itemId;
    console.log(itemId);
    return (
      this.props.todoList.find((item) => item.id === itemId) || {
        description: "",
        completed: "",
        priroityOptions: ["Low", "Medium", "High", "Hair on Fire"],
      }
    );
  }

  render() {
    return (
      <div className="details__wrapper">
        <div className="form-title-text">
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.form.title}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div className="form-descriptopn-text">
          <label className="description-input">Description</label>
          <textarea
            value={this.state.form.description}
            onChange={this.handleChange}
            placeholder="Comments"
            name="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-completed-checkbox">
          <label>
            Completed
            <input
              type="checkbox"
              name="completed"
              value={this.state.form.completed}
              onChange={this.handleChange}
            ></input>
          </label>
        </div>
        <div className="form-priority-dropdown">
          <select
            value={this.state.form.priority}
            onChange={this.handleChange}
            name="priority"
            className="priority"
          >
            <option value="" selected disabled>
              Choose a priority
            </option>
            {this.props.priroityOptions.map((priority, index) => {
              return (
                <option value={priority} key={index}>
                  {priority}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Update Changes
          </button>
        </div>
        <Link className="taskGoBackLink" to="/Todolist">
          Go Back
        </Link>
      </div>
    );
  }
}

export default withRouter(Details);
