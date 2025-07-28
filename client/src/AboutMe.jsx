import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src="/author.jpg" alt="Profile" />
        </div>

        <div className="about-content">
          <h2>Introduce Myself</h2>
          <h4>Who I am</h4>
          <p>
            I am <span className="highlight">Chun Wai Chung</span>, a seeker of logic within structure and beauty beneath function. Schooled at Centennial College in the field of Software Engineering, I tread the line where innovation stirs and systems respond.
            <br /><br />
            Impossible considered, yet resolutely pursued were challenges that demanded both rigor and imagination. With each line of code, a pattern emerges; with each interface, an experience unfolds. Put rest and must set kind — thus begins the next task, the next trial, the next silent triumph.
            <br /><br />
            Design, development, deployment — all meet where intention sharpens skill. I do not simply build; I interpret. For in the realm of software, even silence is structured.
          </p>

          <a href="/resume.pdf" download className="download-resume-btn">
            📄 Download My Resume
          </a>

          <div className="skills">
            <SkillBar label="GRAPHIC" value="70%" />
            <SkillBar label="UX/UI DESIGN" value="80%" />
            <SkillBar label="CODING" value="70%" />
            <SkillBar label="WORDPRESS" value="60%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="skill-bar">
      <span className="label">{label}</span>
      <div className="bar">
        <div className="fill" style={{ width: value }}></div>
        <span className="value">{value}</span>
      </div>
    </div>
  );
}

function Service({ icon, title }) {
  return (
    <div className="service-box">
      <div className="icon">{icon}</div>
      <h5>{title}</h5>
      <p>Fusce elementum, erat quis volutpat porta, neque erat venenatis.</p>
    </div>
  );
}
