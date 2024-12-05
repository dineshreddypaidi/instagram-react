// import App from "./component";
import Home from "../pages/Home";
import Login from "./Login";
import React, { useState, useEffect } from "react";

const IsloggedUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return isAuthenticated ? <Home /> : <Login />;
};

export default IsloggedUser;
