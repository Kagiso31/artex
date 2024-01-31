import { BlogPost } from "../../data";

type TagsProps = {
  post: BlogPost | undefined;
};

const Tags = ({ post }: TagsProps) => {
  return (
    <div className="post-tags__container">
      <p className="post-tags__heading">Tags:</p>
      <ul role="list" className="post-tags__list">
        {post?.tags.map((tag) => (
          <li key={tag} className="post-tags__item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
