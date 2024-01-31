import { BlogPost } from "../../data";

type CommentsProps = {
  post: BlogPost | undefined;
  openReply: () => void;
};

const Comments = ({ post, openReply }: CommentsProps) => {
  return (
    <div className="post-comments">
      <h2 className="post-comments__heading">
        {post?.comments?.length}{" "}
        {post?.comments?.length === 1 ? "Comment" : "Comments"}
      </h2>
      <div className="post-comments__list">
        {post?.comments?.map(({ id, author, profileImg, body, date }) => (
          <div key={id} className="post-comments__grid">
            <div>
              <img
                className="post-comments__img"
                src={profileImg}
                alt={`${author}'s profile picture`}
              />
            </div>

            <div className="post-comments__text">
              <h3 className="post-comments__author">{author}</h3>
              <p className="post-comments__date">{date}</p>
              <p className="post-comments__body">{body}</p>
              <button className="post-comments__button" onClick={openReply}>
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
