import React from "react";
import logo from '../assets/logo'
import ui from '../assets/ui'

export default function ProjectCardModal(props) {
  return (
    <div className={`project-card-modal ${props.className}`} id={props.id}>
      <div className="container">
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button>
          <img src={ui.cross} alt="" />
        </button>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a
          href="https://github.com/n-nikolin"
          //to open in new tab
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo.github} alt="github logo" />
        </a>
      </div>
      </div>
    </div>
  );
}
