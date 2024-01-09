import { Link } from "react-router-dom";
import { Play } from "../../data/icons/misc/Play";

const OurStory = () => {
  return (
    <section aria-labelledby="our-story" className="story">
      <div className="story__container">
        <div>
          {/* play button */}
          <a className="story__button" href="https://www.youtube.com">
            <Play className="story__button-icon" />
          </a>
        </div>
        <div>
          <h3 id="our-story" className="story__subheading">
            Our Story
          </h3>
          <h2 className="story__heading">
            We Are Passionate And Always Produce Better Results For You
          </h2>
          <p className="story__body">
            There are many variations of passage Lorem Ipsum available but the
            dumm majority have suffered alteration in that some form by injected
            humour or the a randomised of tat words which don't look even
            slightly believable. If you are Lorem Ipsum there isn't anything for
            the mind blowing message embarrassing.
          </p>
          <p className="story__body">
            randomised words which don't look even slightly believable. If you
            are Loresm as the Ipsum mbarrassing.There are many variations of
            passages of Lorem Ipsum that available majority alteration by many
            more injected.
          </p>
          <Link className="common-link" to="/artex">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
