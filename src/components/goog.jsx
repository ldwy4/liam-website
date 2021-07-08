import React, { Component } from "react";
import Cookies from 'js-cookie';
import disable from "../images/google-icons/btn_google_signin_light_disabled_web.png";
import normal from "../images/google-icons/btn_google_signin_dark_normal_web@2x.png";

class goog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: disable,
      disable: true
    };
    if (Cookies.get('id') != null) {
      this.state.image = normal;
      this.state.disable = false;
    } else {
      this.state.image = disable;
      this.state.disable = true;
    }
  }
  render() {
    return (
      <React.Fragment>
          <input type='image' src={this.state.image}
          disabled={this.state.disable}
          className="login-button"
          onClick={(e) => {
            window.location.href="https://api.tbirdsync.com/url";
          }}>
          </input>
          {/* <a
            href="https://stravasync.pythonanywhere.com/url"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Google" src={this.state.image} height="60px"/>
          </a> */}
      </React.Fragment>
    );
  }
}

export default goog;
