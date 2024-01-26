import { Link } from "react-router-dom";
import { PortfolioItem } from "../../data/types";
import { portfolio } from "../../data";
import OurPortfolioBgImg from "../../assets/home/element1.png";

const Portfolio = () => {
  const firstFourItems = portfolio.slice(0, 4);

  return (
    <section
      aria-labelledby="our-portfolio"
      className="our-portfolio"
      style={{ backgroundImage: `url(${OurPortfolioBgImg})` }}
    >
      <div className="our-portfolio__wrapper">
        <div className="our-portfolio__text">
          <h2 id="our-portfolio" className="our-portfolio__heading">
            Our Portfolio
          </h2>
          <p className="our-portfolio__body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            similique aliquam itaque vitae? Sit, perspiciatis cupiditate!
          </p>
        </div>
        <div className="our-portfolio__cards">
          {firstFourItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({
  cardImg,
  name,
  location,
  summary,
  link,
}: PortfolioItem) => {
  return (
    <section className="our-portfolio-card">
      <div className="our-portfolio-card__text">
        <header className="our-portfolio-card__heading-container">
          <h3 className="our-portfolio-card__heading">{name}</h3>
          <h4 className="our-portfolio-card__subheading">{location}</h4>
        </header>
        <p className="our-portfolio-card__summary">{summary}</p>
        <Link className="our-portfolio-card__link common-link" to={link}>
          Read More
        </Link>
      </div>

      <div className="our-portfolio-card__img-container">
        <img
          className="our-portfolio-card__img"
          src={cardImg}
          alt="Portfolio Image"
        />
      </div>
    </section>
  );
};

export default Portfolio;
