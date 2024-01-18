import Hero from "./Hero";
import OurStory from "./OurStory";
import Services from "./Services";
import OurPortfolio from "./OurPortfolio";
import LatestBlog from "./LatestBlog";
import Features from "./Features";

const Home = () => {
  return (
    <main>
      <Hero />
      <OurStory />
      <Features />
      <Services />
      <OurPortfolio />
      <LatestBlog />
    </main>
  );
};

export default Home;
