import React from "react";
import { useState } from "react";
import gitHubLogo from "../assets/GitHub-Mark-64px.png";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  // this shit doesn't work as intended
  // rewrite as useReducer hook
  const [modal, setModal] = useState(false);
  // const [activeObject, setActiveObject] = useState(null);

  // // this is the thingy I need:
  // const description = document.getElementById("expand");
  const handleClick = (id) => {
    setModal(!modal);
    console.log(id);
    if (!modal) {
      document.getElementById(`expand-${id}`).style.display = "block";
    } else {
      document.getElementById(`expand-${id}`).style.display = "none";
    }
  };

  return (
    <div
      onClick={() => {
        handleClick(props.id);
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href="#!">
        <img src={gitHubLogo} alt="github logo" />
      </a>
      <ProjectCardModal
        id={props.id}
        title={props.title}
        description={props.description}
      />
    </div>
  );
}
