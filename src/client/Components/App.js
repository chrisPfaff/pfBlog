import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Line from "./Line";

//import RouteButtons from "./RouteButtons";
import "../styles/app.scss";
import "../styles/routebuttons.scss";

const App = () => (
  <div>
    <Header />
    <Line />
    <div className="routeButtons">
      <Link to="/blog" className="link one">
        {` Blog `}
      </Link>
      <Link to="/about" className="link two">
        {` About `}
      </Link>
      <Link to="/links" className="link three">
        {` Links `}
      </Link>
    </div>
  </div>
);

export default App;
