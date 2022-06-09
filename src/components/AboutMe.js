import React from 'react'
import my_photo from "../assets/my_photo.jpg";


export default function AboutMe(props) {
  return (
    <div className="about-me-container" id="about-me">
    <h1>{props.heading}</h1>
    <div className="about-me-container-content">
      <img src={my_photo} alt="my stupid face" />
      <p>{props.general}</p>
    </div>
    <div className="contact-links">
      {/* try replacing these with svg icons */}
      <h4>nikitanikolin85@gmail.com</h4>
      <h4>@doshik_s_pivkom</h4>
      <h4>https://github.com/n-nikolin</h4>
    </div>
  </div>
  )
}
