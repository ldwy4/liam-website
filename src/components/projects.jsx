import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  state = {};
  render() {
    return (
      <section className="projects">
        <div className="mt-4 container">
          <div className="justify-content-md-left row">
            <div className="col-md-12">
              <h2 id="projects" className="mb-3 mt-4">
                Projects
              </h2>
              {this.props.projects.map((project) => (
                <Project
                  key={project.key}
                  title={project.title}
                  description={project.description}
                  photo={project.photo}
                  url={project.url}
                  languages={project.languages}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
