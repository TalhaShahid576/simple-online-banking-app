import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <hr />
            <Routes>
              <Route
                exact
                path="/"
                render={() => {
                  return this.state.isUserAuthenticated ? (
                    <Navigate to="/login" />
                  ) : (
                    <Navigate to="/home" />
                  );
                }}
              />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
