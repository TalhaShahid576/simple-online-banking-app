import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import AccountDetails from "./components/AccountDetails";
import Transfer from "./components/Transfer";

const AuthLayout = () => (
  <React.Fragment>
    <Route path="/home" component={Home} />
    <Route path="/logout" component={Logout} />
    <Route path="/account-details" component={AccountDetails} />
    <Route path="/transfer" component={Transfer} />
  </React.Fragment>
);

// const redirectIfUser = () => {
//   // Add your own logic to redirect if user is already logged in
// };

const routes = (
  <Route path="/" component={Login}>
    <Route element={AuthLayout} />
  </Route>
);

const router = createBrowserRouter({ routes });

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
