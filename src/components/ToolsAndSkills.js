import React from "react";
import logo from "../assets/logo";

export default function ToolsAndSkills({ toolsHeading, skillsHeading, education, foreignLanguages }) {
  const languagesList = foreignLanguages.languages;

  return (
    <section className="tools-and-skills" id="tools_and_skills">
      <h2 className="tools-and-skills heading">
        {toolsHeading}
      </h2>
      <div>
        <div className="tools-and-skills gallery">
          <span>
            <h4>backend</h4>
            <img src={logo.python} alt="" />
            <img src={logo.django} alt="" />
            <img src={logo.flask} alt="" />
            <img src={logo.psql} alt="" />
          </span>
          <span>
            <h4>frontend</h4>
            <img src={logo.js} alt="" />
            <img src={logo.react} alt="" />
            <img src={logo.css} alt="" />
            <img src={logo.html} alt="" />
          </span>
          <span>
            <h4>other</h4>
            <img src={logo.ubuntu} alt="" />
          </span>
        </div>
      </div>
      <div>
        <h2>{skillsHeading}</h2>
        <div className="tools-and-skills content">
          <h4>{education.heading}</h4>
          <p>{education.university}</p>
          <p>{education.faculty}</p>
          <p>{education.specialty}</p>
          <p>{education.date}</p>
          <p>{education.degree}</p>
          <h4>{foreignLanguages.heading}</h4>
          {languagesList.map((language, index) => {
            return (
              <p key={index}>
                {language.language} {language.level}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
