import { Link } from "react-router-dom";
import { teamMembers } from "../../data/team";

const Team = () => {
  return (
    <section aria-labelledby="super-team" className="team">
      <div className="team__wrapper">
        <div className="team__text">
          <h2 id="super-team" className="team__heading">
            Super Team
          </h2>

          <p className="team__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor
            fugit expedita cumque quis quo rerum.
          </p>
        </div>

        <div className="team-cards">
          {teamMembers.map(({ id, img, name, link, speciality, socials }) => (
            <div key={id} className="team-card" tabIndex={0}>
              <div className="team-card__img-container">
                <img className="team-card__img" src={img} alt={name} />
                <div className="team-card__socials">
                  {socials.map(({ id, title, link, icon }) => (
                    <a
                      aria-label={title}
                      key={id}
                      href={link}
                      className="team-card__social-link"
                    >
                      <span aria-hidden>{icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="team-card__text">
                <h3 className="team-card__name">
                  <Link to={link}>{name}</Link>
                </h3>
                <p className="team-card__role">{speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
