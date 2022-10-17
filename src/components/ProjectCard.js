import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="project-card" onClick={handleClick}>
      <h3>{props.title}</h3>
      <p>{props.shortDescription}</p>
      <ProjectCardModal
        className={isOpen ? "open" : "closed"}
        id={props.id}
        title={props.title}
        description={props.longDescription}
      />
    </div>
  );
}
