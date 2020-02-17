import React, { Component } from "react";
import Roster from "../images/square_roster_photo.jpg";
import "../style.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="basic-navbar-nav">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active" href="#">
              About <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Project
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
            <a href="#">
              <img
                alt=""
                src={Roster}
                width="50"
                height="50"
                className="d-inline-block align-top rounded-circle"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
