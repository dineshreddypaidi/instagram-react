import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import IsloggedUser from "../src/components/Islogged";
import Feed from "./actions/Feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<IsloggedUser />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/:username" element={<User />} />
        <Route path="user/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
