import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home/index";
// import Logout from "./components/Logout";
import AccountDetails from "./components/AccountDetails";
import Transfer from "./components/Transfer";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/pages/login" element={Login} />
      <Route exact path="/home" element={Home} />
      <Route exact path="/logout" element={Logout} />
      <Route exact path="/account-details" element={AccountDetails} />
      <Route exact path="/transfer" element={Transfer} />
    </Routes>
  </Router>
);

export default App;
