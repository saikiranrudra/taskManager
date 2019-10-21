import React, { Component } from "react";

class ChartCard extends Component {
  render() {
    return (
      <div className="card chart">
        <div className="card__title">{this.props.title}</div>
      </div>
    );
  }
}

export default ChartCard;
