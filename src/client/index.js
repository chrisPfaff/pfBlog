import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Links from "./Components/Links";
import Line from "./Components/Line";
import NoMatch from "./Components/NoMatch";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/links" component={Links} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
