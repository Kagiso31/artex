import { Link } from "react-router-dom";
import { tags } from "../../data/sidebar";

const Tags = () => {
  return (
    <section className="tags">
      <h2 className="tags__heading">Tags</h2>
      <ul role="list" className="tags__list">
        {tags.map(({ id, title, url }) => (
          <li key={id}>
            <Link to={url} className="tags__link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tags;
