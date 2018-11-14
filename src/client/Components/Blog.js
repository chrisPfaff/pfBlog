import React, { Component } from "react";
import Header from "./Header";

//import "../styles/line.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Blog;
