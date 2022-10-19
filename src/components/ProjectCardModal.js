import React from "react";
import GitHubLogo from '../assets/GitHub.png'

export default function ProjectCardModal(props) {
  return (
    <div className={`project-card-modal ${props.className}`} id={props.id}>
      <div className="container">
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button>x</button>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a
          href="https://github.com/n-nikolin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="github logo" />
        </a>
      </div>
      </div>
    </div>
  );
}
