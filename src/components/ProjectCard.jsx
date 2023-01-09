import { useEffect, useState } from "react";
import ProjectCardModal from "./ProjectCardModal";
import axios from "axios";

const getTotal = (resp) => {
  let res = 0;
  for (let k in resp) {
    res += resp[k];
  }
  return res;
};

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [total, setTotal] = useState();

  // disable scroll on open modal
  useEffect(() => {
    const scrollWidth =
      window.innerWidth - document.getElementById("root").offsetWidth;
    console.log(scrollWidth);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.paddingRight = isOpen ? `${scrollWidth}px` : "0";
    document.getElementsByClassName("navbar")[0].style.marginRight = isOpen
      ? `${scrollWidth}px`
      : "0";
    document.getElementsByClassName("scroll-to-top")[0].style.marginRight =
      isOpen ? `${scrollWidth}px` : "0";
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      console.log("gay");
      console.log(props.langUrl);
      axios
        .get(props.langUrl, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
        .then((res) => {
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
        modalOpen={isOpen}
        languages={languages}
        total={total}
        repoUrl={props.repoUrl}
        setModalOpen={setIsOpen}
      />
    </div>
  );
};

export default ProjectCard;
