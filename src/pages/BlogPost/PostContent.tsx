import { useState } from "react";
import { BlogPost } from "../../data";
import ReplyForm from "./ReplyForm";
import LeaveCommentForm from "./LeaveCommentForm";
import Quote from "./Quote";
import Comments from "./Comments";
import PostList from "./PostList";
import Tags from "./Tags";

type PostContentProps = {
  post: BlogPost | undefined;
};

const PostContent = ({ post }: PostContentProps) => {
  const [isReplying, setIsReplying] = useState(false);

  const openReply = () => {
    setIsReplying(true);
  };

  const closeReply = () => {
    setIsReplying(false);
  };
  return (
    <article className="post">
      <ul className="post__subheading" role="list">
        <li>{post?.date}</li>
        <li>{post?.category.map((item) => item)}</li>
      </ul>

      <h1 className="post__heading">{post?.title}</h1>

      <p>{post?.body}</p>

      <p>{post?.body2}</p>

      <Quote post={post} />

      <p>{post?.body3}</p>

      <div className="post__img">
        <img src={post?.postImg} />
      </div>

      <PostList post={post} />

      <Tags post={post} />

      {post?.comments && <Comments post={post} openReply={openReply} />}

      {isReplying ? (
        <ReplyForm closeReply={closeReply} />
      ) : (
        <LeaveCommentForm />
      )}
    </article>
  );
};

export default PostContent;
