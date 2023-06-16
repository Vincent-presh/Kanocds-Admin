//import React
import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Dashboard from "./components/dashboard";
import Complete from "./components/Complete";
import Donate from "./components/donate";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/complete-signUp" component={Complete} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
