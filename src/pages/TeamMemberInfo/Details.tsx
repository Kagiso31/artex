import { TeamMember } from "../../data";
import { getSocialLogo } from "../../utils";

type DetailsProps = {
  member: TeamMember | undefined;
};

const Details = ({ member }: DetailsProps) => {
  if (!member) {
    return;
  }
  return (
    <section aria-label="Member Details" className="member-details">
      <div className="member-details__wrapper">
        <div className="member-details__img-container">
          <img className="member-details__img" src={member.img} alt="" />
        </div>
        <div className="member-details__content">
          <h1 className="member-details__name">{member.name}</h1>
          <ul role="list" className="member-details__info">
            {member.info.map(({ id, infoTitle, infoValue }) => (
              <li key={id}>
                <p>
                  <span className="member-details__info-title">
                    {infoTitle}:{" "}
                  </span>
                  {infoValue}
                </p>
              </li>
            ))}
          </ul>
          <ul role="list" className="member-details__socials">
            {member.socials.map(({ id, title, link }) => (
              <li key={id}>
                <a href={link}>
                  {getSocialLogo(title, "member-details__social-icon")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;
