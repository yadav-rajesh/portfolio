export default function Hero({ profile }) {
  return (
    <section id="home" className="hero section-pad section-reveal">
      <div className="hero-content">
        <p className="eyebrow">Available for work</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-copy">{profile.tagline}</p>

        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href={profile.resumeLink} download>
            Download Resume
          </a>
        </div>

      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-logo-pulse" />
        <div className="hero-logo">
          <span>{"</>"}</span>
        </div>
        <div className="hero-code-chip chip-one">{`const build = "clean";`}</div>
        <div className="hero-code-chip chip-two">{`api.secure("jwt");`}</div>
      </div>
    </section>
  );
}
