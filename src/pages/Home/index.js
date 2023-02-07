import React from "react";

const Home = ({ user, getUser }) => {
  React.useEffect(() => {
    // getUser();
  }, [getUser]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default Home;
