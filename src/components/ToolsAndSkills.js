import React from "react";
import logo from "../assets/logo";

export default function ToolsAndSkills({ toolsAndSkills }) {
  const languagesList = toolsAndSkills.skills.foreign_languages.languages;

  return (
    <section className="tools-and-skills" id="tools_and_skills">
      <h2 className="tools-and-skills heading">
        {toolsAndSkills.tools.heading}
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
        <h2>{toolsAndSkills.skills.heading}</h2>
        <div className="tools-and-skills content">
          <h4>{toolsAndSkills.skills.education.heading}</h4>
          <p>{toolsAndSkills.skills.education.university}</p>
          <p>{toolsAndSkills.skills.education.faculty}</p>
          <p>{toolsAndSkills.skills.education.specialty}</p>
          <p>{toolsAndSkills.skills.education.date}</p>
          <p>{toolsAndSkills.skills.education.degree}</p>
          <h4>{toolsAndSkills.skills.foreign_languages.heading}</h4>
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
