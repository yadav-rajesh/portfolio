export default function Projects({ projects }) {
  const getLiveLink = (project) => {
    const liveLink = project.live?.trim();

    if (!liveLink || liveLink === "#") {
      return `/project-unavailable.html?project=${encodeURIComponent(project.name)}`;
    }

    return liveLink;
  };

  return (
    <section id="projects" className="section-pad section-reveal">
      <h3 className="section-title">Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="card project-card">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="link-row project-actions">
              <a className="project-action-link" href={getLiveLink(project)} target="_blank" rel="noreferrer">
                Live
              </a>
              <a className="project-action-link" href={project.code} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
