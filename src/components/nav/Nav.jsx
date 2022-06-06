import React, { useEffect } from "react";
import "./nav.css";
import { IoMdCall } from "react-icons/io";

import { NAV_LINKS } from "./data";

import { HiMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";

const navigationBarAdjustment = () => {
  const navigationHeight = document.querySelector(".navbar")?.offsetHeight;
  console.log({ navigationHeight });

  if (navigationHeight > 0 && document.documentElement.setProperty)
    document.documentElement?.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
};

export const Nav = () => {
  useEffect(() => {
    navigationBarAdjustment();
  });

  return (
    <div id="nav" className="navbar">
      <div>
        <div className="navbar__contact-details-header">
          <div className="navbar__phone">
            <span>
              <IoMdCall />
            </span>
            <span>{"+91 9816900199 | 9816708195"}</span>
          </div>
          <div>
            <a className="navbar__phone" href="mailto:suryauday21@gmail.com">
              <span>
                <HiMail className="navbar__icon" />
              </span>
            </a>
          </div>
          <div>
            <a
              className="navbar__phone"
              href="https://www.facebook.com/SuryaUdayCT/"
            >
              <span>
                <BsFacebook className="navbar__icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="nav__links">
        {NAV_LINKS.map((e, i) => (
          <a key={i} className="nav__anchor" href={e.link} alt={""}>
            {e.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
