import React, { useState } from "react";
import axios from "axios";
import { login } from "../utils/Auth";
import "../App.css";

const Login = ({ getUser }) => {
  const [LoginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://web-assessment.apps.ocp.tmrnd.com.my/api/auth/loginAdmin",
        {
          loginId: "youremail.com",
          password: "your password",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "API-KEY": "m.talhas1993@gmail.com",
          },
        }
      );
      login(response.data.token);
      getUser();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <h1>Welcome to MBANK</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="text"
          placeholder="Enter Login ID"
          value={LoginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
