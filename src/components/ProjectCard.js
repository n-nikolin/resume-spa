import { useEffect, useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  // disable scroll on open modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.paddingRight = isOpen ? "20px" : "0";
    document.getElementsByClassName("navbar")[0].style.marginRight = isOpen
      ? "18px"
      : "0";
    document.getElementsByClassName("scroll-to-top")[0].style.marginRight =
      isOpen ? "18px" : "0";
  }, [isOpen]);

  return (
    <div className="project-card" onClick={() => setIsOpen(true)}>
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
