import React from "react";
import { Link } from "react-router-dom";
import "../styles/nomatch.scss";

const NoMatch = () => {
  return (
    <div className="notFoundCard">
      <img src="src/client/img/monitor.png" alt="404 image" />
      <br />
      <Link className="backButton" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default NoMatch;
