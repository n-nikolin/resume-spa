import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="project-card"
      onClick={() => {
        setIsOpen(true);
        console.log("m");
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.shortDescription}</p>
      <ProjectCardModal
        id={props.id}
        title={props.title}
        description={props.longDescription}
        modalOpen={isOpen}
        setModalOpen={setIsOpen}
      />
    </div>
  );
}
