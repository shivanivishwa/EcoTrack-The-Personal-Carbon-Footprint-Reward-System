import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import InputPage from "./pages/inputpage";
import Dashboard from "./pages/dashboard";
import Result from "./pages/result";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;