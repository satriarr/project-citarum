import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./assets/scss/loginRegister.scss";

import { errorActionRemove } from "../actions";

import Greeting from "./Greeting";
import Login from "./Login";
import Register from "./Register";

class Auth extends React.Component {
  onClickErrorDismiss = () => {
    this.props.errorActionRemove();
  };

  render() {
    return (
      <Fragment>
        {this.props.isAuth && <Redirect to="/home" />}
        {this.props.hasError && (
          <div className="my-modal">
            <div className="my-modal__content animated bounceIn">
              <h3>Galat!, terjadi kesalahan</h3>
              <p>{this.props.errorMessage}</p>
              <button
                className="btn btn-outline-danger"
                onClick={this.onClickErrorDismiss}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-md-6 p-5 animated fadeInLeft delay-1s">
            <div className="p-5">
              <div className="login__header-text">
                <h1 className="primary--text">
                  Citarum<span style={{ color: "#434343" }}>River</span>
                </h1>
                <h3>Monitoring system</h3>
              </div>
              <Route path={`/auth/`} exact component={Greeting} />
              <Route
                path={`/auth/login`}
                render={() => (
                  <Login changeErrorState={this.changeErrorState} />
                )}
              />
              <Route path={`/auth/register`} component={Register} />
            </div>
          </div>
          <div className="col-md-6 login__right-ct--bandung p-0 animated fadeInRight">
            <div className="right-ct__white-ct" />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.error);
  return {
    hasError: state.error.hasError,
    errorMessage: state.error.message,
    isAuth: state.auth.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    errorActionRemove
  }
)(Auth);
