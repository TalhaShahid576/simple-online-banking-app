import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountDetails = ({ user, getUser }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [balance, setBalance] = useState(user ? user.balance : 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setName(user ? user.name : "");
    setEmail(user ? user.email : "");
    setBalance(user ? user.balance : 0);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        "https://web-assessment.apps.ocp.tmrnd.com.my/api/user",
        {
          id,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      getUser();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Account Details</h1>
      {error && <p style={{ color: "#000" }}>{error}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="balance">Balance:</label>
      <input type="number" id="balance" value={balance} disabled />
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountDetails;
