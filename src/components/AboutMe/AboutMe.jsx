import React, { forwardRef } from "react";
import profilePic from "../../assets/my_photo.jpg";
import logo from "../../assets/logo";
import "./AboutMe.scss";

const AboutMe = forwardRef(({ aboutMe }, ref) => {
  return (
    <section className="about-me" id="about_me" ref={ref}>
      <div className="about-me heading">
        <h2>{aboutMe.heading}</h2>
      </div>
      <div className="about-me content">
        <img src={profilePic} alt="my profile pic" />
        <p>{aboutMe.general}</p>
      </div>
      <div className="about-me links">
        <a href={aboutMe.github_url} target="_blank" rel="noopener noreferrer">
          <h3>n-nikolin</h3>
          <img src={logo.github} alt="" />
        </a>
        <h3>nikitanikolin85@gmail.com</h3>
      </div>
    </section>
  );
});

export default AboutMe;
