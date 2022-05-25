import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";

const HOME = "#";
export const Footer = () => {
  return (
    <footer>
      <a href={HOME} className="footer__logo">
        <div className="charity__name">
          <h1>Suryauday Charitable trust</h1>
          <h4>अंधेरे से उजाले की ओर</h4>
        </div>
      </a>
      <ul className="permalinks">
        <li>
          <a href={HOME}>Home</a>
        </li>
        <li>
          <a href={"#about"}>About</a>
        </li>
        <li>
          <a href={"#mission"}>Mission</a>
        </li>
        <li>
          <a href={"#joinus"}>Join Us</a>
        </li>
        <li>
          <a href={"#donate"}>Donate Us</a>
        </li>
        <li>
          <a href={"#contact"}>Contact Us</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/SuryaUdayCT/">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Ward No. 04, Banroru Road, Tikka Lehsar, Yol Cantt, Tehsil
          Dharamshala, Dharamshala, HIMACHAL PRADESH
        </small>
      </div>
    </footer>
  );
};

export default Footer;
