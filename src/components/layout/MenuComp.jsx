import React from "react";
import { Link, NavLink } from "react-router-dom";

function MenuComp() {
  return (
    <>
      {/* Bootstrap CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>

      {/* Navbar */}
      <nav className="navbar bg-body-secondary px-3 mb-3">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/list">
              List
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/board">
              Board
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuComp;
