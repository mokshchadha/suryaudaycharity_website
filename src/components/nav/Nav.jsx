import React from "react";
import "./nav.css";
import { IoMdCall } from "react-icons/io";

import { NAV_LINKS } from "./data";

export const Nav = () => {
  return (
    <div id="nav" className="navbar">
      <div className="navbar__phone">
        <span style={{ marginRight: "0.5rem" }}>
          <IoMdCall />
        </span>
        <span>{"+91 9816900199 | 9816708195"}</span>
      </div>
      <div className="nav__links">
        {NAV_LINKS.map((e, i) => (
          <a
            key={i}
            className="nav__anchor"
            href={e.link}
            alt={""}
            target="_blank"
            rel="noreferrer"
          >
            {e.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
