import React, { Component } from "react";
import Header from "./Header";
import "../styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Header />;
  }
}

export default App;
