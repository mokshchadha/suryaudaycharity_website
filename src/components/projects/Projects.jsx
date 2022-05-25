import React from "react";
import "./projects.css";

const PROD1 = require("../../assets/images/PROD_1.png");
const PROD2 = require("../../assets/images/PROD_2.png");

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="project__header">Our Projects</h1>
      <p className="project__subtitle">
        Surya Uday Charitable Trust focus area , Our Focus Area is Special
        Education ADL for children and young adults{" "}
      </p>
      <div className="project__row">
        <img className="project__image" src={PROD1} alt="" />
        <div className="project__text_1">
          <h4>Vocational Training</h4>

          <p>
            Kids always love new unique handcrafts. It’s so fun to get to see
            all our students make a print, and then turn that print into a cute
            picture, or make a thing by cutting bamboo, paper, etc. It is such a
            blessing to see the smile and excitement on their faces when they
            are enjoying their crafting. Vocational Training is an indigenous
            component of our work culture, for assisting our Special Children to
            become self-reliant. In lieu of this, we tie-up with different Skill
            Development Institutions viz., PNBRSETI ( Punjab National Bank Rural
            Self Employment Training Institute), Government Polytechnic College,
            Kangra, and so on. We have conducted training on Soft Toy making,
            Cutting and Tailoring, Candle Making, and more for our students. We
            also work specifically on inclusion activities wherein our students
            and their parents/siblings are trained together.
          </p>
        </div>
      </div>
      <div className="project__row">
        <div className="project__text_2">
          <h4>Educational Visits</h4>
          <p>
            Our students are taken for Educational / Social Visits to places
            like Post offices, Bus Stands, Hospitals, Bank, Restaurant, Temples,
            etc. We also encourage our student’s participation in Marriages,
            Cultural Events, Picnics too. Since our inception, our students have
            visited internationally acclaimed Dharamshala Cricket Stadium under
            Himachal Pradesh Cricket Association, Baba Badoh Temple, Yol
            Gurudwara (on the occasion of Guru Parv), and so on, ensuring that
            they learn Social Behavior as an important aspect of living an
            inclusive life.
          </p>
        </div>
        <img className="project__image" src={PROD2} alt="" />
      </div>
    </div>
  );
};

export default Projects;
