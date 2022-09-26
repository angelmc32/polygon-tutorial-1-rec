import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left uk-margin-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/">
              <img
                data-src={logo}
                width="48"
                height="48"
                alt=""
                data-uk-img=""
                uk-image="true"
              />
              LOGO
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right uk-margin-right">
        <ul className="uk-navbar-nav">
          <button className="uk-button uk-button-primary">Lens Login</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
