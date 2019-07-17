import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import _ from "lodash";

import { authLogout, userTokenVerify } from "../actions";

import Auth from "./Auth";
import Home from "./Home";

toast.configure();

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (_.isEmpty(token)) {
      localStorage.removeItem("token");
      this.props.authLogout();
    } else {
      this.props.userTokenVerify(token);
    }
  }

  redirectRender() {
    if (window.location.pathname === "/" && this.props.isAuth) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/auth" />;
    }
  }

  render() {
    // let renderPage = null;
    // this.props.isAuth
    //   ? (renderPage = <Route path="/" component={Home} />)
    //   : (renderPage = <Route path="/" component={Auth} />);

    return (
      <HashRouter>
        <Route path="/auth" component={Auth} />
        <Route path="/home" component={Home} />
        {this.redirectRender()}
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    authLogout,
    userTokenVerify
  }
)(App);
