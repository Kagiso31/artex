import { TeamMember } from "../../data";

type SkillsProps = {
  member: TeamMember | undefined;
};

const Skills = ({ member }: SkillsProps) => {
  if (!member) {
    return;
  }
  return (
    <section aria-labelledby="skills" className="skills member-item">
      <div className="skills__wrapper member-item__wrapper">
        <div className="skills__heading-container member-item__heading-container">
          <h2 id="skills" className="skills__heading member-item__heading">
            Professional Skills
          </h2>
        </div>

        <div className="skills__body member-item__body">
          <div className="skills__container">
            {member.skills.map(({ id, title, progress }) => (
              <div key={id} className="skills__group">
                <p className="skills__title">{title}</p>
                <div className="skills__progress">
                  <div
                    className="skills__progress-bar"
                    style={{
                      width: progress,
                      opacity: "1",
                    }}
                  >
                    <span>{progress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
