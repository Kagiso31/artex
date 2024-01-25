import { TeamMember } from "../../data";

type ExperienceProps = {
  member: TeamMember | undefined;
};

const Experience = ({ member }: ExperienceProps) => {
  if (!member) {
    return;
  }
  return (
    <section aria-labelledby="experience" className="experience member-item">
      <div className="experience__wrapper member-item__wrapper">
        <div className="experience__heading-container member-item__heading-container">
          <h2
            id="experience"
            className="experience__heading member-item__heading"
          >
            Diversity of Experience
          </h2>
        </div>

        <div className="experience__body member-item__body">
          <p>{member.bio3}</p>
          <p>{member.bio4}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
