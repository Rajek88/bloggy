import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1 id="nav-logo">Bloggy..!</h1>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
