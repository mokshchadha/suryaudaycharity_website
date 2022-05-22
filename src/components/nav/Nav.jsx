import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";

const TOP = "#";

export const Nav = () => {
  return (
    <div id="nav" className="navbar">
      <a href="#about">About</a>
      <a href="#mission">Mission</a>
      <a href="#events">Our events</a>
      <a href="#donate">Donate Us</a>
      <a href="#join">Join Us</a>
      <a href="#contact">Contact Us</a>
      <a href="#gallery">Gallery</a>
      <a href={TOP}>
        <AiFillHome />
      </a>
    </div>
  );
};

export default Nav;
