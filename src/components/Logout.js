import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AccountDetails from "./AccountDetails";
import Transfer from "./Transfer";
import Logout from "./Logout";
// import "./App.css";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/account-details" component={AccountDetails} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </div>
);

export default App;
