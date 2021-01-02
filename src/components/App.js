import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing";
import Enter from "./Enter";
import Create from "./Create";
import Gallery from "./Gallery";
import About from "./About";

import "../css/App.css"

const App = () => {
  return (
    <BrowserRouter basename="/Counterpoint-frontend/">
      <Route path="/landing" exact component={Landing} />
      <Route path="/create" exact component={Create} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/about" exact component={About} />
      <Route path="/" component={Enter} />
    </BrowserRouter>
  );
}

export default App;