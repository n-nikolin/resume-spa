import React from "react";
import ProjectCard from "./ProjectCard";

export default function MyProjects(props) {
  function truncateString(string) {
    const truncated = string.split(" ").slice(0, 10).join(" ") + "...";
    return truncated;
  }
  return (
    <section className="my-projects" id="my_projects">
      <h2>{props.myProjects.heading}</h2>
      <div className="project-cards">
        {props.myProjects.projects.map((project, index) => {
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
