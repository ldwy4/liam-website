import React, { Component } from "react";
import Pdf from "../New_Resume.pdf";
import "../style.css";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="bg-theme mb-4 text-left">
        <div className="mt-4 container">
          <div className="justify-content-md-left row">
            <div className="col-md-12">
              <h1 className="mb-2">My name is Liam Dwyer.</h1>
              <p>
                I am a first year student at UBC where I am a member of the
                Varsity Cross Country and Track & Field teams and plan to pursue
                a degree in Computer Science. I am currently looking for an
                internship for Summer 2020.{" "}
                <a href={Pdf} target="_blank">
                  Resume
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
