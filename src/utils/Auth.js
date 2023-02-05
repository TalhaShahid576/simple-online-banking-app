import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post(
      "https://web-assessment.apps.ocp.tmrnd.com.my/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", response.data.accessToken);
    return true;
  } catch (err) {
    return false;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export { login, logout, isAuthenticated };
