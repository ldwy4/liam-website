import React, { Component } from "react";
import StravaLogo from "../images/strava_connect.png";
import stefo from "../images/stefo.JPG";
import Goog from "./goog"
import Cookies from 'js-cookie';
// import Sheet from "../images/sheets.png";

class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
    if (Cookies.get('id') == null) {
      this.state.display = false;
    } else {
      this.state.display = true;
    }
  }
  render() {
    const renderCheck = () => {
      if (this.state.display) {
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
            <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
          </svg>
        );
      }
    }
    return (
      <React.Fragment>
        <div className='BGImage'>
          <div className='container wrapper'>
            <div className='signin-container'>
                <h2>Sign in</h2>
                <hr className='seperator mt-4'/>
              <div className='login mt-5 mb-4 col-md-9' id='strava'>
                  <input type='image' src={StravaLogo}
                    disabled={this.state.display}
                    className="login-button"
                    onClick={(e) => {
                      window.location.href="https://www.strava.com/oauth/authorize?client_id=51156&response_type=code&redirect_uri=http://www.tbirdsync.com/strava&approval_prompt=force&scope=activity:read_all";
                    }}>
                  </input>
                  {renderCheck()}
                <Goog/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default signin;
