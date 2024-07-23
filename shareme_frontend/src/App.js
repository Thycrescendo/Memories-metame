import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./component/Login";
import Home from "./container/Home";
import UnrealComponent from "./component/UnrealComponent";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="/unreal" element={<UnrealComponent />} />
    </Routes>
  );
};

export default App;
