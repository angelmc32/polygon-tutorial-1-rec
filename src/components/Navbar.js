import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/diamond-logo.png";
import ConnectWalletButton from "./ConnectWalletButton";

const Navbar = ({
  address,
  setAddress,
  setChainId,
  isLoadingState,
  setIsLoadingState,
}) => {
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
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right uk-margin-right">
        <ul className="uk-navbar-nav">
          <li>
            {!address ? (
              <ConnectWalletButton
                setIsLoadingState={setIsLoadingState}
                isLoadingState={isLoadingState}
                setAddress={setAddress}
                setChainId={setChainId}
              />
            ) : (
              <button
                className="uk-button uk-button-primary"
                onClick={(event) => setAddress(null)}
              >
                Disconnect
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
