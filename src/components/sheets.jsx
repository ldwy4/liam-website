import React, { Component } from "react";
import Sheet from "./sheet";
import Cookies from 'js-cookie'
import Navbar from "./navbar";
import Loader from "react-loader-spinner";

class Sheets extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      url: '',
      sheets: [],
      UID: Cookies.get('id'),
      otherURL: "https://api.tbirdsync.com/create?" + "uid=" + Cookies.get('id'),
      loaded: false,
      loading: false,
      creating: false,
      created: false,
      selected: false,
    };
    this.showSheets = this.showSheets.bind(this);
    this.createSheet = this.createSheet.bind(this);
    this.selectSheet = this.selectSheet.bind(this);
  }

  showSheets() {
    this.setState({ loading: true });
    const url = "https://api.tbirdsync.com/drive?code=" + this.state.UID;
    fetch(url, {
      credentials: 'include'
    }).then((response) =>
      response.json().then((data) => {
        let sheets = [];
        for (var i = 0; i < data.length; i++) {
          const key = Math.floor(Math.random() * 1000);
          console.log(key);
          sheets.push({
            key: key,
            title: data[i][0],
            id: data[i][1],
          });
        }
        this.setState({ sheets: sheets, loaded: true, loading: false, });
      })
    );
  }

  createSheet() {
    this.setState({ creating: true });
    const url = this.state.otherURL;
    fetch(url, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.json().then(this.setState({ created: true, creating: false, })));
  }

  selectSheet() {
    const url = this.state.URL;
    fetch(url, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.json().then(this.setState({ selected: true })));
  }

  handleSubmit(e) {
    // if (this.state.id == '') {
    //     return
    // }
    e.preventDefault();

    const payload = {
      id: this.state.id,
    };

    console.log(payload);
    var something = JSON.stringify(payload);

    fetch("https://api.tbirdsync.com/cookie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: something,
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        console.log(body);
      });
  }

  handleChangeId = childId => e => {
    this.setState({ id: childId });
    this.setState({ url: "https://api.tbirdsync.com/sheet?code=" + childId + "&uid=" + this.state.UID })
    console.log(this.state.id)
    console.log(this.state.url)
  }

  render() {
    var sheets = [];
    if (this.state.sheets.length !== 0) {
      sheets = [...this.state.sheets];
    }
    console.log(this.state.UID)
    return (
      <section style={{ display: "flex", flexDirection: "row", height: "auto", minHeight: "100%", overflow: "auto" }}>
        <div className={this.state.creating | this.state.created ? "sheetsShrink" : "sheets"}>
          {!this.state.selected ?
            <div className="content">

              <h3 className="sheets-title">Select an existing training log</h3>
              {this.state.loading &&
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={40}
                  width={40}
                  timeout={5000} //3 secs
                />
              }
              {!this.state.loaded ?
                <button className={this.state.loading ? "btn btn-danger mt-3" : "btn btn-danger"} onClick={this.showSheets}>Select</button>
                :
                <div className="list">
                  {this.state.sheets.map((sheet) => (
                    <Sheet
                      key={sheet.key}
                      title={sheet.title}
                      id={sheet.id}
                      onChangeId={this.handleChangeId(sheet.id)}
                      active={this.state.id === sheet.id}
                    />
                  ))}
                  <button className="btn btn-danger" onClick={this.selectSheet}>Submit</button>
                </div>
              }
            </div>
            :
            <div className="content">
              <h3 className="sheets-title">Training log saved!</h3>
              <svg style={{ width: '40px' }} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
              </svg>
            </div>
          }
        </div>
        {/* <div class="vl"></div> */}
        <div className={!this.state.loaded && !this.state.loading ? "create" : "createShrink"}>
          <div className="content">
            <h3 className="create-title">{this.state.created ? "Created new training log!" : "Create a new training log for this year"}</h3>
            {this.state.creating &&
              <Loader
                className="mb-3"
                type="TailSpin"
                color="#00BFFF"
                height={40}
                width={40}
              />
            }
            {!this.state.creating && !this.state.created &&
              <button className="btn btn-primary" onClick={this.createSheet} >Create</button>
            }
            {this.state.created &&
              <svg style={{ width: '40px' }} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
              </svg>
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Sheets;
