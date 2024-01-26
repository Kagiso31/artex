import introImg from "../../assets/faq/banner14-1536x696.jpg";

const Intro = () => {
  return (
    <section aria-labelledby="faq-intro" className="faq-intro">
      <div className="faq-intro__headings-container intro__headings-container">
        <h1 id="faq-intro" className="faq-intro__heading intro__heading">
          Frequently Asked Questions
        </h1>
        <h2 className="faq-intro__subheading intro__subheading">
          The Answer to All Your Questions
        </h2>
      </div>

      <div>
        <img className="faq-intro__img intro__img" src={introImg} />
      </div>
    </section>
  );
};

export default Intro;
