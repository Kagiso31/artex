import { Link } from "react-router-dom";
import { portfolio } from "../../data";
import { useState } from "react";

const Projects = () => {
  const [numberOfItems, setNumberOfItems] = useState(9);
  const initialProjects = portfolio.slice(0, numberOfItems);

  const loadMore = (numberToAdd: number) => {
    if (numberOfItems + numberToAdd > portfolio.length) {
      return;
    }
    setNumberOfItems((prev) => prev + numberToAdd);
  };

  return (
    <section aria-label="Projects" className="projects">
      <div className="projects__wrapper">
        <div className="projects__grid">
          {initialProjects.map(({ id, name, location, thumbnail, link }) => (
            <div key={id} className="projects-card">
              <div className="projects-card__img-container">
                <img className="projects-card__img" src={thumbnail} />
                <div className="projects-card__icon">
                  <Link to={link} title={name}>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="projects-card__text">
                <h3 className="projects-card__name">
                  <Link className="projects-card__link" to={link}>
                    {name}
                  </Link>
                </h3>
                <h4 className="projects-card__location">{location}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__button-container">
          <button className="projects__button" onClick={() => loadMore(6)}>
            <a className="common-link">
              {numberOfItems >= portfolio.length
                ? "No More Posts"
                : "More Posts"}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
