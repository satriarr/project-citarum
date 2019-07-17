import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers, deleteUser } from "../actions";

import myImage from "./assets/images/profile.jpg";

import "./assets/scss/home.scss";

export class Manage extends Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleButtonClick = _id => {
    if (window.confirm("Apakah anda yakin? ")) {
      this.props.deleteUser(_id);
    }
  };

  render() {
    const usersCard = this.props.users.map(val => {
      return <Card key={val._id} user={val} onClick={this.handleButtonClick} />;
    });
    return (
      <div className="manage animated zoomIn faster">
        <div className="manage__header-text">
          <h3>Kelola Pengguna</h3>
          <p>Pusat kelola pengguna (admin)</p>
        </div>
        <div className="manage__user-list">{usersCard}</div>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="user-list__item">
      <div className="user-list__image">
        <img src={myImage} alt="profile" />
      </div>
      <div className="user-list__text">
        <button
          className="btn btn-outline-danger float-right mt-2"
          onClick={() => {
            props.onClick(props.user._id);
          }}
        >
          Hapus
        </button>
        <h3>{`${props.user.firstname} ${props.user.lastname}`}</h3>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllUsers,
    deleteUser
  }
)(Manage);
