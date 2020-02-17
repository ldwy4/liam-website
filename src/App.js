import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Project from "./components/project";
import { bizhackInfo, macbethInfo } from "./data.js";
import bizhacks from "./images/bizhacks.jpg";
import macbeth from "./images/macbeth.png";

class App extends Component {
  state = {
    projects: [
      {
        key: 1,
        title: "Bizhacks 2020",
        description: bizhackInfo,
        photo: bizhacks,
        url:
          "https://drive.google.com/file/d/1T8zioLIQsgoiZzHTTG4VQxgtjwGHpV4b/view"
      },
      {
        key: 2,
        title: "Macbeth Arcade Game",
        description: macbethInfo,
        photo: macbeth,
        url: "https://github.com/ldwy4/Macbeth-Arcade"
      }
    ]
  };
  render() {
    const projects = [...this.state.projects];
    console.log(projects[0].photo);
    return (
      <React.Fragment>
        <Navbar />
        <About />
        {projects.map(project => (
          <Project
            key={project.key}
            title={project.title}
            description={project.description}
            photo={project.photo}
            url={project.url}
          ></Project>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
