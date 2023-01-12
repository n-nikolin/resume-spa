import React from "react";
import { useEffect, useState } from "react";
import ProjectCardModal from "./ProjectCardModal";
import axios from "axios";
// TODO: think of a way to separate useEffect from component

const getTotal = (resp) => {
  let res = 0;
  for (let k in resp) {
    res += resp[k];
  }
  return res;
};

const offsetScrollWidth = (modalState) => {
  const scrollWidth =
    window.innerWidth - document.getElementById("root").offsetWidth;
  document.body.style.overflow = modalState ? "hidden" : "auto";
  document.body.style.paddingRight = modalState ? `${scrollWidth}px` : "0";
  document.getElementsByClassName("navbar")[0].style.marginRight = modalState
    ? `${scrollWidth}px`
    : "0";
  document.getElementsByClassName("scroll-to-top")[0].style.marginRight = modalState
    ? `${scrollWidth}px`
    : "0";
};

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [languages, setLanguages] = useState([])
  const [total, setTotal] = useState();

  useEffect(() => {
    offsetScrollWidth(isOpen);
    if (isOpen) {
      setFetching(true);
      axios
        .get(props.langUrl, {
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
          if (err.response.status===401) {
            setFetching(false);
          } else {
            console.log(err);
          }
        });
    }
  }, [isOpen]);

  return (
    <div className="project-card" onClick={() => setIsOpen(true)}>
      <h3>{props.title}</h3>
      <p className="clamped">{props.description}</p>
      <ProjectCardModal
        id={props.id}
        title={props.title}
        description={props.description}
        repoUrl={props.repo_url}
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
