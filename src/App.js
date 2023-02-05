import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AccountDetails from "./components/AccountDetails";
import Transactions from "./components/TransactionsHistory";
import Transfer from "./components/Transfer";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account-details" component={AccountDetails} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </>
  );
};

export default App;
