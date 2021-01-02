import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Landing from "./Landing";
import Enter from "./Enter";
import Create from "./Create";
import Gallery from "./Gallery";
import About from "./About";

import "../css/App.css"

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route path="/landing" exact component={Landing} />
      <Route path="/create" exact component={Create} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/about" exact component={About} />
      <Route path="/" exact component={Enter} />
    </HashRouter>
  );
}

export default App;