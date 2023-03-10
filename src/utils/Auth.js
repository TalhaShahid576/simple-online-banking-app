import axios from "axios";

const login = async (loginId, password) => {
  try {
    const response = await axios.post(
      "https://web-assessment.apps.ocp.tmrnd.com.my/api/auth/loginAdmin",
      { loginId: "admin", password: "password" },
      {
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "m.talhas1993@gmail.com",
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
