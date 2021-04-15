import React, { Component } from "react";
import Projects from "./projects";
import About from "./about";
import { bizhackInfo, macbethInfo, pokerInfo } from "../data.js";
import bizhacks from "../images/bizhacks.jpg";
import macbeth from "../images/macbeth.png";
import poker from "../images/poker.png";
import Navbar from "./navbar";
import Footer from "./footer";

class home extends Component {
    state = {
      projects: [
        {
          key: 1,
          title: "Bizhacks 2020",
          description: bizhackInfo,
          photo: bizhacks,
          url:
            "https://drive.google.com/file/d/1T8zioLIQsgoiZzHTTG4VQxgtjwGHpV4b/view",
          languages: ["JavaScript", "Node.js"],
        },
        {
          key: 2,
          title: "Poker Odds Calculator",
          description: pokerInfo,
          photo: poker,
          url: "https://github.com/ldwy4/Poker-Hand-Analyzer",
          languages: ["Java"],
        },
        {
          key: 3,
          title: "Macbeth Arcade Game",
          description: macbethInfo,
          photo: macbeth,
          url: "https://github.com/ldwy4/Macbeth-Arcade",
          languages: ["Java"],
        },
      ],
      songs: [
        {
          key: 1,
          url: "https://open.spotify.com/embed/track/4gwltSjdrzKtKz9dlk2Wja",
        },
        {
          key: 2,
          url: "https://open.spotify.com/embed/track/2Fb4e2vbt8kpFDsig2pvuQ",
        },
        {
          key: 3,
          url: "https://open.spotify.com/embed/track/3CAX47TnPqTujLIQTw8nwI",
        },
      ],
    };
    render() {
      const projects = [...this.state.projects];
      const songs = [...this.state.songs];
      console.log(projects[0].photo);
      return (
        <React.Fragment>
          <Navbar />
          <About />
          {/* <Technology /> */}
          <Projects projects={projects}></Projects>
          <Footer />
        </React.Fragment>
      );
    }
}
export default home;