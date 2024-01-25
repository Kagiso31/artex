import { useParams } from "react-router-dom";
import { teamMembers } from "../../data/team";
import { useEffect } from "react";
import Details from "./Details";
import Biography from "./Biography";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const TeamMemberInfo = () => {
  const { id } = useParams();
  const member = teamMembers.find(
    (teamMember) => teamMember.id === parseInt(id!)
  );

  useEffect(() => {
    document.title = `${member?.name} – Artex`;
  }, [member?.name]);

  return (
    <main>
      <Details member={member} />
      <Biography member={member} />
      <Skills member={member} />
      <Experience member={member} />
      <Contact member={member} />
    </main>
  );
};

export default TeamMemberInfo;
