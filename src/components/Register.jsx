import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createUser } from "../actions";

export class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
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
    this.props.createUser(this.state);
  };
  render() {
    return (
      <div className="register">
        <div className="register__form">
          <div className="form__register-text">
            <h2>Daftar akun</h2>
            <p>Citarum River Authentication System</p>
          </div>

          <form onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleInputChange}
                      className="form-control"
                      placeholder="Firstname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleInputChange}
                      className="form-control"
                      placeholder="Lastname"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="input-email">
                  <i className="fas fa-envelope" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="input-password"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="input-password">
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
                aria-describedby="input-password"
                required
              />
            </div>
            <p className="mt-4 mb-4">
              Sudah punya akun? <Link to="/auth/login">masuk</Link>
            </p>
            <button type="submit" className="btn btn-danger">
              Daftar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    createUser
  }
)(Register);
