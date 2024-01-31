import { BlogPost } from "../../data";

type PostListProps = {
  post: BlogPost | undefined;
};

const PostList = ({ post }: PostListProps) => {
  return (
    <div className="post__list-container">
      <h2 className="post__list-heading">{post?.bodyHeading}</h2>
      <p>{post?.body4}</p>
      <ul role="list" className="post__list">
        {post?.bodyList.map((item) => (
          <li key={item} className="post__list-item">
            {item}
          </li>
        ))}
      </ul>
      <p>{post?.body5}</p>
    </div>
  );
};

export default PostList;
