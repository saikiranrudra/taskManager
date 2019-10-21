import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo">TaskManager</div>
        <div className="nav__button">Menu</div>
      </div>
    );
  }
}

export default NavBar;
