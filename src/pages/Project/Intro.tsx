import { PortfolioItem } from "../../data";

type IntroProps = {
  project: PortfolioItem | undefined;
};

const Intro = ({ project }: IntroProps) => {
  if (!project) {
    return;
  }
  return (
    <section className="project-intro">
      <div className="project-intro__wrapper">
        <div className="project-intro__info">
          <h2 className="project-intro__location">{project.location}</h2>
          <h1 className="project-intro__name">{project.name}</h1>
          <p className="project-intro__summary">{project.summary}</p>
        </div>
        <div className="project-intro__details">
          {project.projectDetails.map(({ id, detailTitle, detailValue }) => (
            <div key={id} className="project-intro__detail">
              <h3 className="project-intro__detail-title">{detailTitle}</h3>
              <p className="project-intro__detail-body">{detailValue}</p>
            </div>
          ))}
        </div>
        <div className="project-intro__socials-container">
          <ul role="list" className="project-intro__socials">
            {project.socials.map(({ id, link, icon }) => (
              <li key={id}>
                <a href={link} className="project-intro__link">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
