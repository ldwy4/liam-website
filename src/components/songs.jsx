import React, { Component } from "react";
import Song from "./song";

class Songs extends Component {
  state = {};
  render() {
    return (
      <section className="songs">
        <div className="mt-4 container">
          <div className="justify-content-md-center">
            <div className="col-md-12">
              <h2 id="songs" className="mb-2 text-center">
                What I'm listening to
              </h2>
              <div className="row songs-container">
                {this.props.songs.map((song) => (
                  <Song key={song.key} url={song.url} />
                ))}
              </div>
            </div>
            <a
              className="apple-music-logo"
              href="https://embed.music.apple.com/ca/playlist/staying-in/pl.u-JPAZZNJtm0aYp1"
            ></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Songs;
