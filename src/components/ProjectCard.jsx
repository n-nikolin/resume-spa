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

const offsetScrollWidth = (arg) => {
  const scrollWidth =
    window.innerWidth - document.getElementById("root").offsetWidth;
  document.body.style.overflow = arg ? "hidden" : "auto";
  document.body.style.paddingRight = arg ? `${scrollWidth}px` : "0";
  document.getElementsByClassName("navbar")[0].style.marginRight = arg
    ? `${scrollWidth}px`
    : "0";
  document.getElementsByClassName("scroll-to-top")[0].style.marginRight = arg
    ? `${scrollWidth}px`
    : "0";
};

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    offsetScrollWidth(isOpen);
    if (isOpen) {
      axios
        .get(props.langUrl, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setLanguages(res.data);
          setTotal(getTotal(res.data));
        })
        .catch((err) => console.log(err));
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
        languages={languages}
        total={total}
        modalOpen={isOpen}
        setModalOpen={setIsOpen}
      />
    </div>
  );
};

export default ProjectCard;
