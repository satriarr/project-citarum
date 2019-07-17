import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import UserProfile from "./ProfileUpdate";
import Manage from "./Manage";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/home/" exact component={Dashboard} />
        <Route path="/home/profile" exact component={UserProfile} />
        <Route path="/home/manage" exact component={Manage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.user
  };
};

export default connect(mapStateToProps)(Main);
