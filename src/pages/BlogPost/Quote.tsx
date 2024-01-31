import { BlogPost } from "../../data";

type QuoteProps = {
  post: BlogPost | undefined;
};

const Quote = ({ post }: QuoteProps) => {
  return (
    <blockquote className="post-quote">
      <div></div>
      <div className="post-quote__text">
        <em className="post-quote__body">{post?.quote.body}</em>
        <cite className="post-quote__author">
          {post?.quote.author} – <span>{post?.quote.occupation}</span>
        </cite>
      </div>
    </blockquote>
  );
};

export default Quote;
