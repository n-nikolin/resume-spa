import React from "react";
import { useState, useEffect } from "react";
import gitHubLogo from "../assets/GitHub-Mark-64px.png";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = (id) => {
    const modal = document.getElementById(`expand-${id}`);
    setIsOpen(!isOpen);
    console.log(id);
    if (!isOpen) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  };

  return (
    <div
      onClick={() => {
        handleClick(props.id);
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.shortDescription}</p>
      <a href="#!">
        <img src={gitHubLogo} alt="github logo" />
      </a>
      <ProjectCardModal
        id={props.id}
        title={props.title}
        description={props.longDescription}
      />
    </div>
  );
}
