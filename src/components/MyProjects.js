import React from "react";
import ProjectCard from "./ProjectCard";

export default function MyProjects(props) {
  return (
    <div className="my-projects-container" id="my-projects">
      <h1>{props.heading}</h1>
      <div className="project-cards">
        {props.projectList.map((project, index) => {
          return (
            <ProjectCard
              key = {index}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
