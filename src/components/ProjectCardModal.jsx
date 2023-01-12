import React from "react";
import logo from "../assets/logo";
import ui from "../assets/ui";
import ProgressBar from "./ProgressBar";
import LanguageList from "./LanguageList";

const ProjectCardModal = ({
  id,
  title,
  description,
  modalOpen,
  setModalOpen,
  total,
  repoUrl,
  languages,
  fetching,
}) => {
  return (
    <div
      className={`project-card-modal ${modalOpen ? "open" : "closed"}`}
      id={id}
    >
      <div className="container">
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setModalOpen(false)}>
            <img src={ui.cross} alt="" />
          </button>
          <h3>{title}</h3>
          <p>{description}</p>
          {fetching && (
            <h1 style={{ textAlign: "center" }}>fetching data...</h1>
          )}
          {!fetching && (
            <div>
              <ProgressBar languages={languages} total={total} />
              <LanguageList languages={languages} total={total} />
            </div>
          )}
          <a
            href={repoUrl}
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
};

export default ProjectCardModal;
