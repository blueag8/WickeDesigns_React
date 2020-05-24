import React from "react";
import Naomi from "../../public/naomi.png";
import "./About.scss";

function About() {
  return (
    <div className="About">
      <div className="About-body">
        <div className="img-container">
          <div className="Naomi">
            <img src={Naomi} alt="naomi" />
          </div>
        </div>
      </div>
      <div className="About-text">
        <h1>Naomi Wickham</h1>
        <p>Hi, I am Naomi. I love designing and creating.</p>
      </div>
    </div>
  );
}

export default About;
