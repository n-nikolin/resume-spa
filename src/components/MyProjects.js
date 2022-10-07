import React from "react";
import ProjectCard from "./ProjectCard";

export default function MyProjects(props) {
  return (
    <div className="my-projects" id="my_projects">
      <h2>{props.myProjects.heading}</h2>
      <ProjectCard />
    </div>
  );
}
