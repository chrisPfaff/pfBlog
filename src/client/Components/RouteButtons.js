import React, { Component } from "react";
import "../styles/routebuttons.scss";

class RouteButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="routeButtons">
        <button>Blog</button>
        <button>About Me</button>
        <button>Links</button>
      </div>
    );
  }
}

export default RouteButtons;
