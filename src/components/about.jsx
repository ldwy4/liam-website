import React, { Component } from "react";
import Pdf from "../New_Resume.pdf";
import "../style.css";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="mb-4 text-left">
        <div className="mt-4 container">
          <div className="justify-content-md-left row">
            <div className="col-md-12">
              <p className="mb-2 about-header">
                Hey, I am Liam Dwyer.
                <br /> Runner and student studying Computer Science &
                Mathematics at UBC
              </p>
              <p className="about-content">
               Here is link to my {" "}
                <a href={Pdf} target="_blank" className="pdf-link">
                  Resume.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
