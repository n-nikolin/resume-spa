import React from "react";

export default function ProjectCardModal(props) {
  return (
    <div
      className={`project-card-modal ${props.className}`}
      id={props.id}
    >
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
