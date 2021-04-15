import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    const { title, description, photo, url, languages } = this.props;
    return (
      <div className="mb-4 project-container">
        <div className="card">
          <img className="card-img-top" src={photo} alt={title}></img>
          <div className="card-body">
            <h4 className="card-title">
              {title}
              {" | "}
              <span className="languages">
                {languages.map((language) =>
                  languages.indexOf(language) !== languages.length - 1
                    ? language + ", "
                    : language
                )}
              </span>
            </h4>

            <p className="card-text">{description}</p>
            <a href={url} className="btn-project">
              See Project
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
