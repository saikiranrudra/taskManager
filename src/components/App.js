import React, { Component } from "react";

import TaskCard from "./TaskCard";
import ChartCard from "./ChartCard";
import NavBar from "./NavBar";
class App extends Component {
  render() {
    return (
      <div className="grid">
        <NavBar />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <ChartCard />
      </div>
    );
  }
}

export default App;
