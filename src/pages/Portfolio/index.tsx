import BrandScroller from "../../components/BrandScroller";
import usePageTitle from "../../hooks/usePageTitle";
import Projects from "./Projects";

const Portfolio = () => {
  usePageTitle("Portfolio");
  return (
    <main>
      <Projects />
      <BrandScroller />
    </main>
  );
};

export default Portfolio;
