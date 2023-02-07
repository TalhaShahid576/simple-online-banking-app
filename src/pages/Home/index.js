import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          "https://web-assessment.apps.ocp.tmrnd.com.my/api/users",
          {
            headers: {
              "Content-Type": "application/json",
              "API-KEY": "m.talhas1993@gmail.com",
            },
          }
        );
        setUser(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const submitUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.get(
        "https://web-assessment.apps.ocp.tmrnd.com.my/api/users",
        newUser
      );
      setUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Account Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => setUpdate(true)}>Update</button>
          {update && (
            <form onSubmit={submitUpdate}>
              <input
                type="text"
                name="name"
                value={newUser.name || user.name}
                onChange={handleUpdate}
              />
              <input
                type="email"
                name="email"
                value={newUser.email || user.email}
                onChange={handleUpdate}
              />
              <input
                type="text"
                name="phone"
                value={newUser.phone || user.phone}
                onChange={handleUpdate}
              />
              <input
                type="text"
                name="address"
                value={newUser.address || user.address}
                onChange={handleUpdate}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
