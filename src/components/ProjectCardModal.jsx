import { useState, useEffect } from "react";
import axios from "axios";
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
  langUrl,
  repoUrl,
}) => {
  const [languages, setLanguages] = useState([]);
  const [total, setTotal] = useState();

  const getTotal = (resp) => {
    let res = 0;
    for (let k in resp) {
      res += resp[k];
    }
    return res;
  };

  useEffect(() => {
    console.log("sent a get request to github");
    axios
      .get(langUrl, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        setLanguages(res.data);
        setTotal(getTotal(res.data));
      })
      .catch((err) => console.log(err));
  }, [langUrl]);

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
          <ProgressBar languages={languages} total={total} />
          <LanguageList languages={languages} total={total} />
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
