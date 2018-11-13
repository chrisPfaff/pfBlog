import React, { Component } from "react";
import "../styles/header.scss";

class Header extends Component {
  render() {
    return (
      <div className="blogHeader">
        <h1 className="headerText">Pf Blog</h1>
      </div>
    );
  }
}

export default Header;
