import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Pages/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Link to="/home">
                <h1>Home Page</h1>
              </Link>
              <Link to="/login">
                <h1>Login</h1>
              </Link>
            </>
          }
        />
        <Route exact path="login" element={<Login />} />
        <Route exact path="home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
