import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    const { title, description, photo, url } = this.props;
    console.log(description);
    return (
      <div className="container">
        <div className="mb-4 project-container">
          <div className="card">
            <img className="card-img-top" src={photo} alt={title}></img>
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary">
                See Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
