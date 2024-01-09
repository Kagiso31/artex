import { heroSlides } from "../../data";
import HeroSlider from "../../components/HeroSlider";

const Hero = () => {
  return (
    <section aria-label="Hero" className="hero">
      <HeroSlider slides={heroSlides} />
    </section>
  );
};

export default Hero;
