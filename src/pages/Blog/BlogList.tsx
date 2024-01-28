import { Link } from "react-router-dom";
import { BlogPost, blogPosts } from "../../data";
import { Comment, User } from "../../data/icons";

const BlogList = () => {
  return (
    <section className="blog-list">
      <div className="blog-list__cards">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

const BlogPostCard = ({
  listImg,
  summary,
  url,
  date,
  category,
  title,
  author,
  comments,
}: BlogPost) => {
  return (
    <div className="blog-list-card">
      <div className="blog-list-card__img-container">
        <Link to={url}>
          <img className="blog-list-card__img" src={listImg} alt="Blog Image" />
        </Link>
      </div>

      <div className="blog-list-card__text">
        <ul className="blog-list-card__list" role="list">
          <li className="blog-list-card__date">{date}</li>
          <li className="blog-list-card__category">
            {category.map((item) => item)}
          </li>
        </ul>

        <h3 className="blog-list-card__heading">
          <Link to={url}>{title}</Link>
        </h3>

        <p className="blog-list-card__summary">{summary}</p>

        <ul className="blog-list-card__list" role="list">
          <li className="blog-list-card__author">
            <User className="blog-list-card__icon" /> <span>By {author}</span>
          </li>
          <li className="blog-list-card__comment">
            <Comment className="blog-list-card__icon" />{" "}
            <span>({comments?.length ?? 0}) Comment</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
