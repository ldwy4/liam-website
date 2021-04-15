import React, { Component } from "react";
import Sheet from "./sheet";
import Cookies from 'js-cookie'

class Sheets extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      url: '',
      sheets: [],
      UID: Cookies.get('id')
    };
  }

  componentDidMount() {
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.tbirdsync.com/drive?code=" + this.state.UID;
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
        this.setState({ sheets: sheets, loaded: true });
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

    fetch("https://www.tbirdsync.com/cookie", {
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
      this.setState({id: childId});
      this.setState({url: "https://www.tbirdsync.com/sheet?code=" + childId + "&uid=" + this.state.UID})
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
      <section style={{ marginLeft: "25px" }}>
        <h2 className="title">Sheet Select</h2>
        <div className="runs row">
          <form className="mb-2 mt-2 col-md-12" action={this.state.url} method="POST"> 
            {this.state.sheets.map((sheet) => (
                <Sheet
                    key={sheet.key}
                    title={sheet.title}
                    id={sheet.id}
                    onChangeId={this.handleChangeId(sheet.id)}
                    active={this.state.id === sheet.id}
                />
            ))}
            <button className="mt-4 btn btn-danger" type="submit" value={this.state.id}>submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Sheets;
