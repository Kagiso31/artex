import Hero from "./Hero";
import OurStory from "./OurStory";
import Services from "./Services";
import OurPortfolio from "./OurPortfolio";
import LatestBlog from "./LatestBlog";
import Features from "./Features";
import Testimonials from "./Testimonials";
import BrandScroller from "../../components/BrandScroller";

const Home = () => {
  return (
    <main>
      <Hero />
      <OurStory />
      <Features />
      <Services />
      <OurPortfolio />
      <Testimonials />
      <LatestBlog />
      <BrandScroller />
    </main>
  );
};

export default Home;
