import React from "react";
import "./header.css";
import { HiMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
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
        <div className="contact-details-header">
          <div style={{ marginBottom: "0.5rem" }}>
            <a className="header__link" href="mailto:suryauday21@gmail.com">
              <span>
                <HiMail className="mail-icon" />
              </span>
              <span>suryauday21@gmail.com</span>
            </a>
          </div>
          <div>
            <a
              className="header__link"
              href="https://www.facebook.com/SuryaUdayCT/"
            >
              <span>
                <BsFacebook />
              </span>
              <span> SuryaUdayCT</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
