import introImg from "../../assets/about/banner19-1536x696.jpg";

const Intro = () => {
  return (
    <section aria-labelledby="about-us" className="intro">
      <div className="intro__headings-container">
        <h1 id="about-us" className="intro__heading">
          About Us
        </h1>
        <h2 className="intro__subheading">
          We Do Great Works for Great Clients.
        </h2>
      </div>

      <div>
        <img className="intro__img" src={introImg} alt="" />
      </div>

      <div className="intro__work-grid">
        <div>
          <p className="intro__work">
            <span className="intro__year">25</span>{" "}
            <span>Years Experience Working</span>
          </p>
        </div>

        <div>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered dummy alteration in that an some form by
            the injected humour or randomised words which don’t look even that
            slightly believable. If you are Lorem Ipsums your need to be sure
            there isn’t anything embarrassing. There are many variations
            passages of Lorem as Ipsums available but the majority have suffered
            that alterations in that some form by injected humour or randomised
            words which don’t looks even slightly that believable. If you are
            Lorem as Ipsum you need to be sure there isn’t anything as
            embarrassing. There are many variation of passages Lorem Ipsum
            available but the majority have suffered that a aalteration in that
            some form by injected humour or randomised words which don’t look
            even slightly the believable. If you are Lorem Ipsum you need to be
            sure there is not the anything of embarrassing. If you are Lorem
            Ipsums your need to be sure there as isn’t anything embarrassing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
