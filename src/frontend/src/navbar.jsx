import "./styles.css";
import React from "react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div className="navbar-header">
          <p className="navbar-brand">Note Keeper</p>
        </div>
        <ul className="navbar-nav mb-3 mb-rg-0 margin">
          <li className="nav-item" id="home">
            <a className="nav-link active" aria-current="page" href="/home">
              Login
            </a>
          </li>

          <li className="nav-item" id="about">
            <a className="nav-link active" aria-current="page" href="/about">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
