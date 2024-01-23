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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque
            error commodi consequuntur assumenda dolores aut dignissimos
            molestiae accusantium quibusdam adipisci quo eveniet accusamus sit
            quis, laborum a obcaecati nemo. Soluta repellat dolorum quia iusto
            placeat exercitationem aliquam, eligendi aperiam quae repellendus
            quod sed deserunt ut qui quasi quo eveniet eum nihil perferendis.
            Corrupti, facere blanditiis vero adipisci distinctio eum
            perspiciatis iure culpa accusamus minus dolore facilis hic nemo, ad,
            unde repellendus deleniti iste veritatis suscipit voluptas. Mollitia
            facere architecto porro. Velit explicabo fugiat hic ullam doloribus
            dolorum veritatis nihil veniam, sapiente ad natus, rerum aperiam sit
            perferendis magni facere, mollitia iste?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
