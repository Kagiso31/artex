import { BlogPost } from "../../data";

type TagsProps = {
  post: BlogPost | undefined;
};

const Tags = ({ post }: TagsProps) => {
  return (
    <div className="post-tags__container">
      <p className="post-tags__heading">Tags:</p>
      <ul role="list" className="post-tags__list">
        {post?.tags.map((tag, index) => {
          if (index === post.tags.length - 1) {
            return (
              <li key={tag} className="post-tags__item">
                {tag}
              </li>
            );
          }
          return (
            <li key={tag} className="post-tags__item">
              {tag},
            </li>
          );
        })}
        {post?.tags.map((tag, index) =>
          post.tags.length === index ? (
            <li key={tag} className="post-tags__item">
              {tag}
            </li>
          ) : (
            <li key={tag} className="post-tags__item">
              {tag},
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Tags;
