import React from "react";
import "./mission.css";
import { Counter } from "./Counter";
import { COUNTER_DATA } from "./data";

const ABOUT_IMAGE2 = require("../../assets/images/About2_IMG.png");

export const Mission = () => {
  return (
    <div id="mission">
      <h1 className="mission_title">Mission</h1>
      <div className="row">
        <img src={ABOUT_IMAGE2} alt={""} className="mission_image" />
        <div className="mission_text">
          <p className="misson_paragraph">
            Our Mission is to improve the lives of children with special needs
            by giving them the opportunity to learn and function on their own
            within their communities. We intend to give the best world-class
            facilities in our school, train our special needs children in skills
            enabling them to do their own job or business. We also intend to
            obtain land from the Government and establish a hostel for Special
            Needs Persons as per the guidelines specified by RCI (Rehabilitation
            Council of India) and NIMH (National Institute of Mentally
            Handicapped).
          </p>
        </div>
      </div>
      <div className="row  counter__row">
        {COUNTER_DATA.map((e) => (
          <Counter
            finalCount={e.finalCount}
            title={e.title}
            startCount={e.startCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
