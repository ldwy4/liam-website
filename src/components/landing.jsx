import React, { Component } from 'react';
import Info from "./info";
import Navbar from "./navbar";
import log from "../images/log.PNG"

class Landing extends Component {
    
    render() {
      return (
        <React.Fragment>
            <div className='BGImage' style={{backgroundImage: 'url(' + log + ')'}}>
                <Navbar />  
                <Info />
            </div>

        </React.Fragment>
      );
    }
}

export default Landing;