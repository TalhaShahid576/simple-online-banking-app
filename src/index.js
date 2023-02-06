import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: false,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
            <hr /> */}
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
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
