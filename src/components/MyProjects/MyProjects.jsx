import React, { forwardRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const MyProjects = forwardRef(
  ({ myProjects, navbarRef, scrollToTopRef, rootRef }, ref) => {
    return (
      <section className="my-projects" id="my_projects" ref={ref}>
        <h2>{myProjects.heading}</h2>
        <div className="project-cards">
          {myProjects.projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                langUrl={project.languages_url}
                repoUrl={project.repo_url}
                navbarRef={navbarRef}
                scrollToTopRef={scrollToTopRef}
                rootRef={rootRef}
              />
            );
          })}
        </div>
      </section>
    );
  }
);

export default MyProjects;
