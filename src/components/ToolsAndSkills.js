import React from "react";
import PyLogo from "../assets/python.svg";
import DjangoLogo from "../assets/djangoproject.svg";
import FlaskLogo from "../assets/flask.svg";
import PostgresLogo from "../assets/postgresql.svg";
import JSLogo from "../assets/javascript.svg";
import HTMLLogo from "../assets/html.svg";
import CSSLogo from "../assets/css.svg";
import GitLogo from "../assets/Git_icon.svg.png";
import UbuntuLogo from "../assets/ubuntu.svg";
import ReactLogo from "../assets/react.svg";

export default function ToolsAndSkills() {
  return (
    <>
      <h2>ToolsAndSkills</h2>
      {/* <h3>Backend</h3>
    <h3>Frontend</h3> */}
      <div className="icon-gallery">
        <h3 style={{ width: "100%", textAlign: "center" }}>
          Languages and frameworks
        </h3>
        {/* <div> */}
        {/* <label htmlFor=""> */}
        {/* <h4>backend</h4> */}
        {/* </label> */}
        <img src={PyLogo} alt="" />
        <img src={DjangoLogo} alt="" />
        <img src={FlaskLogo} alt="" />
        {/* </div> */}
        {/* <div> */}
        {/* <label htmlFor=""><h4>frontend</h4></label> */}
        <img src={JSLogo} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={HTMLLogo} alt="" />
        <img src={CSSLogo} alt="" />
        {/* </div> */}
        {/* <div> */}
        {/* <label htmlFor=""><h4>general purpose</h4></label> */}
        <h3 style={{ width: "100%", textAlign: "center" }}>other tools</h3>
        <img src={PostgresLogo} alt="" />
        <img src={GitLogo} alt="" />
        <img src={UbuntuLogo} alt="" />
        {/* </div> */}
        <h3 style={{ width: "100%", textAlign: "center" }}>Education</h3>
        <p>
          Lomonosov Moscow State University, Faculty of Foreign Languages and
          Area Studies, Culture Studies (2015-2019)
        </p>
        <h3 style={{ width: "100%", textAlign: "center" }}>
          Foreign Languages
        </h3>
        <p>English C1-C2 (Advanced)</p>
        <p>German A1-A2 (Pre-Intermediate)</p>
      </div>
    </>
  );
}
