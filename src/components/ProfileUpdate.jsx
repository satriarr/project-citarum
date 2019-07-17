import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser } from "../actions";

import myImage from "./assets/images/profile.jpg";

export class ProfileUpdate extends Component {
  state = {
    _id: this.props.user._id,
    firstname: this.props.user.firstname,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
    oldpassword: "",
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
    this.props.updateUser(this.state);
    this.setState({
      oldpassword: "",
      password: ""
    });
  };
  render() {
    const { firstname, lastname, email } = this.props.user;
    return (
      <div className="profile mb-5 animated zoomIn faster">
        <div className="profile__header">
          <div className="header__user-profile">
            <div className="user-profile__image">
              <img src={myImage} alt="profile" />
            </div>
            <div className="user-profile__text">
              <h3>{`${firstname} ${lastname}`}</h3>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="profile__update">
          <h4 className="mt-5 mb-5">Informasi profil</h4>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="firstname">Nama lengkap: </label>
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
            <div className="form-group">
              <label htmlFor="email">Alamat surel:</label>
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
            </div>
            <div className="form-group">
              <label htmlFor="password">Kata sandi (lama):</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="input-password">
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="oldpassword"
                  value={this.state.oldpassword}
                  onChange={this.handleInputChange}
                  placeholder="Kata sandi lama"
                  aria-label="Password"
                  aria-describedby="input-password"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Kata sandi (baru):</label>
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
                  placeholder="Kata sandi baru"
                  aria-label="Password"
                  aria-describedby="input-password"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-danger mt-3">
              Perbarui profile
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {
    updateUser
  }
)(ProfileUpdate);
