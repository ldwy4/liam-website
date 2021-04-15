import React, { Component } from "react";
import Roster from "../images/square_roster_photo.jpg";
import "../style.css";

class Navbar extends Component {
  state = {};
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      // <nav className="navbar navbar-dark">
      //   <button
      //     aria-controls="#basic-navbar-nav"
      //     data-target="#basic-navbar-nav"
      //     type="button"
      //     aria-label="Toggle navigation"
      //     className="navbar-toggler"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className={classOne} id="basic-navbar-nav">
      //     <div className="navbar-nav ml-auto">
      //       <a
      //         className="nav-item"
      //         href="https://gothunderbirds.ca/sports/track-and-field/roster/liam-dwyer/8174"
      //         target="_blank"
      //       >
      //         <img
      //           alt=""
      //           src={Roster}
      //           width="50"
      //           height="50"
      //           className="d-inline-block align-top rounded-circle"
      //         />
      //       </a>
      //       <a className="nav-item" href="#projects">
      //         Projects
      //       </a>
      //       <a className="nav-item" href="#songs">
      //         Music
      //       </a>
      //     </div>
      //   </div>
      // </nav>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="#navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-item nav-link" href="#songs">
              Music
            </a>
            <span className="navbar-brand">
              <a
                href="https://gothunderbirds.ca/sports/track-and-field/roster/liam-dwyer/8174"
                target="_blank"
              >
                <img
                  alt=""
                  src={Roster}
                  width="50"
                  height="50"
                  className="d-inline-block align-top rounded-circle"
                />
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
