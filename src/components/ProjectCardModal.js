import React from "react";
import gitHubLogo from "../assets/GitHub-Mark-64px.png";
import crossIcon from "../assets/Cross.svg";

export default function ProjectCardModal(props) {
  return (
    <div className="modal-card" id={`expand-${props.id}`}>
      <button className="close-icon">
        <img src={crossIcon} alt="cross icon" />
      </button>
      <div className="modal-card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href="#!">
          <img className="github-logo" src={gitHubLogo} alt="github logo" />
        </a>
      </div>
    </div>
  );
}
