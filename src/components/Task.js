import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { showFeature: false, style: "1fr" };
  }
  renderFeatures() {
    if (this.state.showFeature) {
      return (
        <div className="task__features">
          <i className="material-icons delete">delete</i>
          <i className="material-icons done">done</i>
          <i className="material-icons edit">create</i>
        </div>
      );
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="task" style={{ gridTemplateRows: this.state.style }}>
        <div className="task__info">
          <div
            className="task__title"
            onClick={() => {
              this.state.showFeature
                ? this.setState({ showFeature: false, style: "1fr" })
                : this.setState({ showFeature: true, style: "1fr 3rem" });
            }}
          >
            Task Title
          </div>
          <p className="task__description">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div className="task__priority"></div>
        {this.renderFeatures()}
      </div>
    );
  }
}

export default Task;
