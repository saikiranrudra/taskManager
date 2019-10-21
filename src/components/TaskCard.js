import React, { Component } from "react";
import Task from "./Task";

class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <Task />
        <Task />
      </div>
    );
  }
}

export default TaskCard;
