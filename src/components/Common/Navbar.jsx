/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import Logo from "../../Assets/logo.png";
import "bulma-switch/dist/css/bulma-switch.min.css";
import Img from "../../Assets/background.png";
import { useEffect } from "react";
import users from "../../StaticData/users";

function Navbar(props) {
  let singleUser = null;
  const [is, setIs] = useState({});
  useEffect(() => {
    const sing = users.filter(
      (user) => user._id === localStorage.getItem("user_id")
    );
    setIs(sing[0]);
  }, [is]);
  function removeUser() {
    setIs({});
    localStorage.removeItem("user_id");
  }
  return (
    <nav
      className="navbar nav-bg"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">
            <img src={Logo} width="112" height="28" />
          </Link>
          <button className="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/home" className="button is-transparent">
                Home
              </Link>
            </div>
            <div className="navbar-item">
              <a className="button is-transparent">About</a>
            </div>
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!is && (
                  <>
                    <Link to="/signup" className="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                      Log in
                    </Link>
                  </>
                )}

                {is && (
                  <div className="navbar-item has-dropdown is-hoverable prof">
                    <button
                      className="button is-light profile-btn"
                      style={{ background: `url(${Img})` }}
                    ></button>
                    <div className="navbar-dropdown">
                      <div class="field" style={{ padding: "0 10px" }}>
                        <input
                          id="switchRoundedDefault"
                          type="checkbox"
                          name="switchRoundedDefault"
                          class="switch is-rounded"
                        />
                        <label for="switchRoundedDefault">Entreprenure</label>
                      </div>
                      <Link className="navbar-item" to="/profile">
                        Profile
                      </Link>
                      <a href="#" onClick={removeUser} className="navbar-item">
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
