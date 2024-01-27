import { useParams } from "react-router-dom";
import { portfolio } from "../../data";
import Intro from "./Intro";
import usePageTitle from "../../hooks/usePageTitle";
import BrandScroller from "../../components/BrandScroller";
import Content from "./Content";

const Project = () => {
  const { id } = useParams();
  const project = portfolio.find((item) => item.id === parseInt(id!));

  usePageTitle(project?.name);
  return (
    <main>
      <Intro project={project} />
      <Content project={project} />
      <BrandScroller />
    </main>
  );
};

export default Project;
