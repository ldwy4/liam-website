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
    };
    this.showSheets = this.showSheets.bind(this)
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
        // for (var run in data) {
        //   console.log(run);
        //   const key = Math.floor(Math.random() * 1000);

        //   runs.push({ key: key, date: run[0], distance: run[1], time: run[2] });
        // }
        this.setState({ sheets: sheets, loaded: true, loading: false, });
      })
    );
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
        <div className="sheets">
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
              <button className={this.state.loading ? "btn btn-danger mt-3" : "btn btn-danger" } onClick={this.showSheets}>Select</button>
              :
              <form className="list" action={this.state.url} method="POST">
                {this.state.sheets.map((sheet) => (
                  <Sheet
                    key={sheet.key}
                    title={sheet.title}
                    id={sheet.id}
                    onChangeId={this.handleChangeId(sheet.id)}
                    active={this.state.id === sheet.id}
                  />
                ))}
                <button className="btn btn-danger" type="submit" value={this.state.id}>submit</button>
              </form>
            }
          </div>
        </div>
        {/* <div class="vl"></div> */}
        <div className={!this.state.loaded ? "create" : "createShrink"}>
          <div className="content">
            <h3 className="create-title">Create a new training log for this year</h3>
            <form action={this.state.otherURL} method="POST">
              <button className="btn btn-primary" type="submit" value={this.state.UID}>Create</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Sheets;
