import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        width: "500px",
        margin: "auto",
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/users">Users Page</Link>
      <Link to="/posts">Posts Page</Link>
      <button>LOGOUT</button>
    </div>
  );
};
