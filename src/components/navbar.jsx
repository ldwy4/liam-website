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
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom ">
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
        <div class="navbar-nav">
          <span className="navbar-brand branding">
            TbirdSync
          </span>
          

        </div>
        <div className='navbar-nav ml-auto'>
          <a className="nav-link nav-item" href="#policy">Privacy Policy</a>
          <a className="nav-link nav-item" href="#terms">Terms</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
