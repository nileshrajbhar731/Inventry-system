import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          {/* <a className="navbar-brand" href="#">Jumpstart</a> */}
          <Link className="navbar-brand nav-link bg-white border" to="/">
            Jumpstart
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li
                className={
                  window.location.pathname === "/" ? "nav-item active" : null
                }
              >
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/Login" ? "nav-item active" : null
                }
              >
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/Register" ? "nav-item active" : null
                }
              >
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
