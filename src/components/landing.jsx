import React, { Component } from 'react';
import Info from "./info";
import Navbar from "./navbar";
import Footer from "./footer";
import log from "../images/log.PNG"

class Landing extends Component {
    
    render() {
      return (
        <React.Fragment>
            <div className='BGImage' style={{backgroundImage: 'url(' + log + ')'}}>
                <Navbar />  
                <Info />
                {/* <Footer /> */}
            </div>

        </React.Fragment>
      );
    }
}

export default Landing;