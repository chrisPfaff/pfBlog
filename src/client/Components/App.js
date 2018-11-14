import React, { Component } from "react";
import Header from "./Header";
import Line from "./Line";
//import RouteButtons from "./RouteButtons";
import "../styles/app.scss";
import "../styles/routebuttons.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Line />
        <div className="routeButtons">
          <button>Blog</button>
          <button>About Me</button>
          <button>Links</button>
        </div>
      </div>
    );
  }
}

export default App;
