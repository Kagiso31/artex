import { Link } from "react-router-dom";
import { blogPosts } from "../../data";
import { BlogPost } from "../../data";
import { Calendar } from "../../data/icons";

const RecentNews = () => {
  const firstFourPosts = blogPosts.slice(0, 4);
  return (
    <section aria-labelledby="news-heading" className="news">
      <h2 id="news-heading" className="news__heading">
        Recent News
      </h2>
      <ul role="list" className="news__list">
        {firstFourPosts.map((post) => (
          <li key={post.id} className="news__item">
            <RecentNewsCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const RecentNewsCard = ({ title, url, date, sidebarImg }: BlogPost) => {
  return (
    <div className="news-card">
      <div className="news-card__wrapper">
        <div className="news-card__img-container">
          <Link to={url}>
            <img className="news-card__img" src={sidebarImg} />
          </Link>
        </div>
        <div className="news-card__text">
          <h3 className="news-card__title">
            <Link className="news-card__link" to={url}>
              {title}
            </Link>
          </h3>
          <div className="news-card__date-container">
            <Calendar className="news-card__icon" />
            <p className="news-card__date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
