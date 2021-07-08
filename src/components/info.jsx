import React, { Component } from "react";
import logo from '../images/strava_logo.png';
import sheet from '../images/sheet_icon.png';
import watch from '../images/watch.png';
import Footer from "./footer";

import "../style.css";

class Info extends Component {
  state = {};
  render() {
    return (
        <div className='info-wrapper'>
            <div className='row'>
                <div className="info-container">
                    <div>
                       <h1> Training logs made easy </h1>
                    </div>
                    <span className="info-text">
                        Automatically update your spreadsheet everytime you upload an activity to Strava.
                    </span>
                    <div className='mt-4'>
                        <a class="btn info-button btn-lg" href="https://www.tbirdsync.com/#/sign-in" role="button">Sign Up</a>
                    </div>
                </div>
                <div className='explain-container'>
                    <h2 className='mt-3 mb-5' style={{color: '#002142'}}>How it works</h2>
                    <div className='mt-4 row actual-info' style={{width: '80%', margin: 'auto'}}>
                        <div>
                            <img src={watch} style={{height:'200px'}}></img>
                            <br/>
                            <div className='mt-2'>
                                <b>Record</b> an activity
                            </div>
                        </div>
                        <span className='long-arrow-right'></span>
                        <div>
                            <img src={logo} style={{height:'200px'}}></img>
                            <br/>
                            <div className='mt-2'>
                                Sync with Strava
                            </div>
                        </div>
                        <span className='long-arrow-right'></span>
                        <div>
                        <img src={sheet} style={{height:'200px'}}></img>
                        <br/>
                            <div className='mt-2' style={{maxWidth: '200px'}}>
                                <b>TbirdSync</b> automatically records the activity in your training log
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Info;
