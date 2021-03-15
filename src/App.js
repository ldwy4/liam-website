import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Songs from "./components/songs";
import Home from "./components/home"
import SignIn from "./components/signin";
import Technology from "./components/technology";

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
      <BrowserRouter>
      <Route path="/liam-website" component={Home} />
      <Route path="/liam-website/sign-in" component={SignIn} />
    </BrowserRouter>
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
