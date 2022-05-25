import React from "react";
import "./header.css";
import { WiSunrise } from "react-icons/wi";

const LOGO = require("../../assets/clipart/logo.jpeg");

export const Header = () => {
  return (
    <div id="header">
      <div className="header-container">
        <img className="logo-image" src={LOGO} alt={""} />
        <div className="charity-name">
          <h1 className="title">Suryauday Charitable Trust</h1>
          <div className="row">
            <h2 className="subtitle">अंधेरे से उजाले की ओर</h2>
            <WiSunrise className="sunrise" />
          </div>
        </div>
        <div className="dontate-us-header">
          <a href="#donate" className="dontate-us-link">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
