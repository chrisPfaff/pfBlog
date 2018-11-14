import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Header from "./Components/Header";
import Line from "./Components/Line";
import Links from "./Components/Links";

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/links" component={Links} />
    </div>
  </Router>,
  document.getElementById("root")
);
