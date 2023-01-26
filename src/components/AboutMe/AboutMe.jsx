import React, { forwardRef } from "react";
import profilePic from "../../assets/my_photo.jpg";
import './AboutMe.scss'

const AboutMe = forwardRef(({ aboutMe }, ref) => {
  return (
    <section className="about-me" id="about_me" ref={ref} onClick={()=>console.log(ref)}>
      <div className="about-me heading">
        <h2>{aboutMe.heading}</h2>
      </div>
      <div className="about-me content">
        <img src={profilePic} alt="my profile pic" />
        <p>{aboutMe.general}</p>
      </div>
    </section>
  );
})

export default AboutMe;
