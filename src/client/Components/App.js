import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "./Header";
import Line from "./Line";
import Blog from "./Blog";
import About from "./About";
import Links from "./Links";
//import RouteButtons from "./RouteButtons";
import "../styles/app.scss";
import "../styles/routebuttons.scss";

const App = () => (
  <div>
    <Header />
    <Line />
    <div className="routeButtons">
      <Link to="/blog" className="link">
        Blog
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/links" className="link">
        Links
      </Link>
    </div>
    <div>
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/links" component={Links} />
    </div>
  </div>
);

export default App;
