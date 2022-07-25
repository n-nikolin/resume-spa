import ProjectCard from "./ProjectCard";

export default function MyProjects(props) {
  function truncateString(string) {
    const truncated = string.split(" ").slice(0, 10).join(" ") + "...";
    return truncated;
  }

  return (
    <div className="my-projects-container" id="my-projects">
      <h1>{props.heading}</h1>
      <div className="project-cards">
        {props.projectList.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <ProjectCard
                id={project.id}
                title={project.title}
                shortDescription={truncateString(project.description)}
                longDescription={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
