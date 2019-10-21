import React, { Component } from "react";

import TaskCard from "./TaskCard";
import ChartCard from "./ChartCard";
import NavBar from "./NavBar";
class App extends Component {
  render() {
    return (
      <div className="grid">
        <NavBar />
        <TaskCard title="Task List" />
        <TaskCard title="Urgent" />
        <TaskCard title="Important" />
        <TaskCard title="Not Important" />
        <ChartCard title="Task Chart" />
      </div>
    );
  }
}

export default App;
