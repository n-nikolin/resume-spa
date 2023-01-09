import ProjectCard from "./ProjectCard";

const MyProjects = ({ myProjects }) => {
  return (
    <section className="my-projects" id="my_projects">
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
