import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { errorActionAdd, loginUser } from "../actions";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <div className="login">
        <div className="login__form">
          <div className="form__login-text">
            <h2>Masuk akun</h2>
            <p>Citarum River Authentication System</p>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-lock" />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <p className="mt-4 mb-4">
              Belum punya akun? <Link to="/auth/register">daftar</Link>
            </p>
            <button type="submit" className="btn primary--button">
              Masuk
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }

export default connect(
  null,
  {
    errorActionAdd,
    loginUser
  }
)(Login);
