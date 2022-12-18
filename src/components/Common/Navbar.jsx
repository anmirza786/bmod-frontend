/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import Logo from "../../Assets/logo.png";

function Navbar(props) {
  return (
    <nav class="navbar nav-bg" role="navigation" aria-label="main navigation">
      <div className="container">
        <div class="navbar-brand">
          <Link to="/home" class="navbar-item">
            <img src={Logo} width="112" height="28" />
          </Link>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div className="navbar-item">
              <Link to="/home" class="button is-transparent">
                Home
              </Link>
            </div>
            <div className="navbar-item">
              <a class="button is-transparent">About</a>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/signup" class="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" class="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
