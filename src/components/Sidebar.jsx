import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { authLogout } from "../actions";

function Sidebar(props) {
  return (
    <div className="sidebar animated fadeInLeft delay-1s faster">
      <div className="sidebar__text">
        <h1>
          Citarum<span style={{ color: "#434343" }}>River</span>
        </h1>
        <h3>Monitoring System</h3>
      </div>
      <div className="sidebar__menu">
        <ul className="menu__list">
          <li className="list__item">
            <NavLink to="/home/" exact={true} activeClassName="is-active">
              Menu Awal
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to="/home/profile" activeClassName="is-active">
              Informasi Profil
            </NavLink>
          </li>
          {props.isAdmin && (
            <li className="list__item">
              <NavLink to="/home/manage" activeClassName="is-active">
                Kelola Pengguna
              </NavLink>
            </li>
          )}
          <li className="list__item">
            <a
              href="/logout"
              onClick={e => {
                e.preventDefault();
                const dec = window.confirm("Apakah anda yakin?");
                if (dec) {
                  props.authLogout();
                }
              }}
            >
              Keluar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAdmin: state.user.admin
  };
};

export default connect(
  mapStateToProps,
  {
    authLogout
  }
)(Sidebar);
