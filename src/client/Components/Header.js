import React, { Component } from "react";
import App from "./App.js";
import { Link, Route } from "react-router-dom";
import "../styles/header.scss";

class Header extends Component {
  render() {
    return (
      <div className="blogHeader">
        <h1>
          <Link to="/" className="link">
            {`< ChristopherPfaff / >`}
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
