// import { useState, useEffect } from "react";
// import axios from "axios";
import ProjectCard from "./ProjectCard";

export default function MyProjects({ myProjects }) {
  // const [projectData, setProjectData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/n-nikolin/repos", {
  //       headers: {
  //         authorization: "token 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",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setProjectData(res.data);
  //     });
  // }, []);

  function truncateString(string) {
    const truncated = string.split(" ").slice(0, 10).join(" ") + "...";
    return truncated;
  }

  return (
    <section className="my-projects" id="my_projects">
      <h2>{myProjects.heading}</h2>
      {/* {projectData.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })} */}
      <div className="project-cards">
        {myProjects.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              shortDescription={truncateString(project.description)}
              longDescription={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}
