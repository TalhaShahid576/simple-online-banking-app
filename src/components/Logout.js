import React from "react";
import { createRoot } from "react-dom/client";

const Logout = () => {
  const history = createRoot();

  const handleLogout = () => {
    // Code to log out the user
    // ...
    // Redirect to login page
    history.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
