import { TeamMember } from "../../data";

type BiographyProps = {
  member: TeamMember | undefined;
};

const Biography = ({ member }: BiographyProps) => {
  if (!member) {
    return;
  }
  return (
    <section aria-labelledby="biography" className="biography member-item">
      <div className="biography__wrapper member-item__wrapper">
        <div className="biography__heading-container member-item__heading-container">
          <h2
            id="biography"
            className="biography__heading member-item__heading"
          >
            Biography
          </h2>
        </div>

        <div className="biography__body member-item__body">
          <p>{member.bio1}</p>
          <p>{member.bio2}</p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
