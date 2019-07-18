import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Main from "./Main";

import { notifyRemove } from "../actions";

import "./assets/scss/home.scss";

class Home extends React.Component {
  onClickNotifyDismiss = () => {
    this.props.notifyRemove();
  };

  render() {
    return (
      <React.Fragment>
        {this.props.notify.hasNotify && (
          <div className="my-modal">
            <div className="my-modal__content animated bounceIn">
              <h3>Pemberitahuan</h3>
              <p>{this.props.notify.message}</p>
              <button
                className="btn btn-outline-danger"
                onClick={this.onClickNotifyDismiss}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        <div className="home container-fluid animated fadeIn">
          {!this.props.isAuth && <Redirect to="/auth/login" />}
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Main />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuth: state.auth.isAuth,
    notify: state.notify
  };
};

export default connect(
  mapStateToProps,
  {
    notifyRemove
  }
)(Home);
