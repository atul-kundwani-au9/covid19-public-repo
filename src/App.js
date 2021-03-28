import React, { Component } from "react";

// components
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import SelfAssess from "./components/SelfAssess";
import Covid from "./components/Covid";
import MoreInfo from "./components/pages/MoreInfo";
import Login from "./components/Login";
import Profile from "./components/pages/Profile";
import { Route, Switch } from "react-router-dom";
// import firebase from "firebase";
import fire from "././config";
import Register from "./components/Register";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/covid" component={Covid} />
          <Route path="/selfassess" component={SelfAssess} />
          <Route path="/moreInfo" component={MoreInfo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/footer" component={Footer} />
         
        </Switch>
      </div>
    );
  }
}
export default App;
