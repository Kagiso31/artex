import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "../../data";
import { Comment, User } from "../../data/icons";

const LatestBlog = () => {
  const firstTwoPosts = blogPosts.slice(0, 2);

  return (
    <section aria-labelledby="latest-blog" className="latest-blog">
      <div className="latest-blog__wrapper">
        <div className="latest-blog__text">
          <h2 id="latest-blog" className="latest-blog__heading">
            Latest Blog
          </h2>
          <p className="latest-blog__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus consequatur sapiente recusandae optio atque,
            dignissimos saepe?
          </p>
        </div>
        {/* latest blog posts */}
        <div className="latest-blog__cards">
          {firstTwoPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPostCard = ({
  cardImg,
  url,
  date,
  category,
  title,
  author,
  comments,
}: BlogPost) => {
  return (
    <div className="latest-blog-card">
      <div className="latest-blog-card__img-container">
        <Link to={url}>
          <img
            className="latest-blog-card__img"
            src={cardImg}
            alt="Blog Image"
          />
        </Link>
      </div>

      <div className="latest-blog-card__text">
        <ul className="latest-blog-card__list" role="list">
          <li className="latest-blog-card__date">{date}</li>
          <li className="latest-blog-card__category">
            {category.map((item) => item)}
          </li>
        </ul>

        <h3 className="latest-blog-card__heading">
          <Link to={url}>{title}</Link>
        </h3>

        <ul className="latest-blog-card__list" role="list">
          <li className="latest-blog-card__author">
            <User className="latest-blog-card__icon" /> <span>By {author}</span>
          </li>
          <li className="latest-blog-card__comment">
            <Comment className="latest-blog-card__icon" />{" "}
            <span>({comments?.length ?? 0}) Comment</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestBlog;
