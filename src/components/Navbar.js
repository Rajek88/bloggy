import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create-post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
