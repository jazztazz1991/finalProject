import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => 
    <ul className="nav nav-tabs">
        <li className={window.location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={window.location.pathname === "/management" ? "active" : ""}>
          <Link to="/management">Management</Link>
        </li>
        <li className={window.location.pathname === "/rent" ? "active" : ""}>
          <Link to="/rent">Rent</Link>
        </li>
    </ul>;



export default Nav;