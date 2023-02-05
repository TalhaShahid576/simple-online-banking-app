import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import AccountDetails from "./components/AccountDetails";
import Transfer from "./components/Transfer";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" element={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/account-details" component={AccountDetails} />
      <Route exact path="/transfer" component={Transfer} />
    </Switch>
  </Router>
);

export default App;
