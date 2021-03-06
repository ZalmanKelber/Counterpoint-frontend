import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Landing from "./Landing";
import Enter from "./Enter";
import Create from "./Create";
import Gallery from "./Gallery";
import About from "./About";

import "../css/App.css"

class App extends React.Component {

  componentDidMount = () => {
    //API is currently hosted on Heroku's free tier.  Because the app takes several seconds to "wake up" the first time 
    //it's called after being dormant, a get request is sent when the frontend is first opened so that response times will be
    //faster by the time the user actually sends a request
    const herokuWakeup = new XMLHttpRequest();
    herokuWakeup.open("GET", "https://counterpoint-server.herokuapp.com/api/wake_up");
    herokuWakeup.onload = e => {
      console.log("response from herokuWakeup call:", herokuWakeup.response)
    }
    herokuWakeup.send();
  }

  render() {

    //note that HashRouter rather than BrowserRouter has to be used in order for deployment on GitHub pages

    return (
      <HashRouter>
        <Route path="/landing" exact component={Landing} />
        <Route path="/create" exact component={Create} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Enter} />
      </HashRouter>
    );
  }
}

export default App;