import BrandScroller from "../../components/BrandScroller";
import usePageTitle from "../../hooks/usePageTitle";
import Intro from "./Intro";
import Operations from "./Operations";
import Team from "./Team";

const About = () => {
  usePageTitle("About Us");
  return (
    <main>
      <Intro />
      <Operations />
      <Team />
      <BrandScroller />
    </main>
  );
};

export default About;
