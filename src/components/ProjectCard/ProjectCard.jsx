import React, { useEffect, useState } from "react";
import "./ProjectCard.scss";
import axios from "axios";
import ProjectCardModal from "../ProjectCardModal/ProjectCardModal";

const ProjectCard = ({
  id,
  title,
  description,
  langUrl,
  repoUrl,
  navbarRef,
  scrollToTopRef,
  rootRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [total, setTotal] = useState();

  const offsetScrollWidth = (modalState) => {
    const scrollWidth = window.innerWidth - rootRef.current.offsetWidth;
    document.body.style.overflow = modalState ? "hidden" : "auto";
    document.body.style.paddingRight = modalState ? `${scrollWidth}px` : "0";
    navbarRef.current.style.marginRight = modalState ? `${scrollWidth}px` : "0";
    scrollToTopRef.current.style.marginRight = modalState
      ? `${scrollWidth}px`
      : "0";
  };

  useEffect(() => {
    offsetScrollWidth(isOpen);
    if (isOpen) {
      setFetching(true);
      axios
        .get(langUrl, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
        .then((res) => {
          setLanguages(res.data);
          setTotal(getTotal(res.data));
          setFetching(false);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setFetching(false);
          } else {
            console.log(err);
          }
        });
    }
  }, [isOpen]);

  return (
    <div className="project-card" onClick={() => setIsOpen(true)}>
      <h3>{title}</h3>
      <p className="clamped">{description}</p>
      <ProjectCardModal
        id={id}
        title={title}
        description={description}
        repoUrl={repoUrl}
        languages={languages}
        total={total}
        modalOpen={isOpen}
        setModalOpen={setIsOpen}
        fetching={fetching}
      />
    </div>
  );
};

export default ProjectCard;


const getTotal = (resp) => {
  const total = Object.values(resp).reduce((prev, curr) => prev + curr, 0);
  return total;
};