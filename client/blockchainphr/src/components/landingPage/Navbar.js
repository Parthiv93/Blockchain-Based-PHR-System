import React from "react";
import logo from "../../assets/img/landingPage/logo.png";
import "./styles.css"

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center w-full shadow-sm lg:bg-white lg:w-screen lg:h-14 lg:px-16 lg:py-3 justify-items-center ">
<img
  src={logo}
  alt="logo"
  className="h-10 pl-2 pr-5 mt-2 lg:h-10 lg:pr-3 filter grayscale"
/>
      <h1 className="custom-text">
        <Link to="/">CareCryption</Link>
      </h1>
      <ul className="flex ml-auto font-semibold w-69 lg:w-90 justify-evenly font-lato custom-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <button className="px-2 py-1 mr-2 font-semibold rounded shadow-sm bg-primary lg:py-2 lg:px-3 font-poppins hover:bg-bgsecondary">
        {location.pathname === "/register" ? (
          <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
  );
}
