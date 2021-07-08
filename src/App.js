import React, { Component } from "react";
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Songs from "./components/songs";
import Home from "./components/home"
import SignIn from "./components/signin";
import Landing from "./components/landing";
import Technology from "./components/technology";
import Goog from "./components/goog";
import Sheets from "./components/sheets"
import Policy from "./components/policy"
import Term from "./components/term"

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <Navbar />
      //   <About />
      //   {/* <Technology /> */}
      //   <Projects projects={projects}></Projects>
      //   <Footer />
      // </React.Fragment>
      <HashRouter>
        <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/site" />
                    )
                }}
              />
          <Route path="/site" component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/goog" component={Goog} />
          <Route path="/drive" component={Sheets} />
          <Route path="/policy" component={Policy} />
          <Route path="/terms" component={Term} />
        </Switch>
    </HashRouter>
    );
  }
}

{
  /* <iframe
  allow="autoplay *; encrypted-media *;"
  frameborder="0"
  height="450"
  style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/ca/playlist/staying-in/pl.u-JPAZZNJtm0aYp1"
></iframe>; */
}

export default App;
