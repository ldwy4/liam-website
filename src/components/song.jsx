import React, { Component } from "react";

class Song extends Component {
  state = {};
  render() {
    const { url } = this.props;
    console.log(url);
    return (
      <div className="col-md-4">
        <iframe
          src={url}
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

export default Song;
