import { useEffect, useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  // disable scroll on open modal
  useEffect(() => {
    const scrollWidth = window.innerWidth - document.getElementById('root').offsetWidth
    console.log(scrollWidth)
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.paddingRight = isOpen ? `${scrollWidth}px` : "0";
    document.getElementsByClassName("navbar")[0].style.marginRight = isOpen
      ? `${scrollWidth}px`
      : "0";
    document.getElementsByClassName("scroll-to-top")[0].style.marginRight =
      isOpen ? `${scrollWidth}px` : "0";
  }, [isOpen]);

  return (
    <div className="project-card" onClick={() => setIsOpen(true)}>
      <h3>{props.title}</h3>
      <p className="clamped">{props.description}</p>
      <ProjectCardModal
        id={props.id}
        title={props.title}
        description={props.description}
        modalOpen={isOpen}
        langUrl={props.langUrl}
        repoUrl={props.repoUrl}
        setModalOpen={setIsOpen}
      />
    </div>
  );
}
