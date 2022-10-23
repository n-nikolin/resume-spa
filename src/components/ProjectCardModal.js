import React from "react";
import logo from "../assets/logo";
import ui from "../assets/ui";

export default function ProjectCardModal({
  id,
  title,
  description,
  modalOpen,
  setModalOpen,
}) {
  return (
    <div
      className={`project-card-modal ${modalOpen ? "open" : "closed"}`}
      id={id}
      onClick={() => setModalOpen(false)}
    >
      {console.log(modalOpen)}
      <div className="container" onClick={() => setModalOpen(false)}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setModalOpen(false)}>
            <img src={ui.cross} alt="" />
          </button>
          <h3>{title}</h3>
          <p>{description}</p>
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
