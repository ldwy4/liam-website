import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section id="contact" className="footer text-center">
        <div className="container">
          <div className="justify-content-md-center row">
            <div className="col-md-5">
              <p className=""> Liam Dwyer &copy; 2021</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
