type ReplyFormProps = {
  closeReply: () => void;
};

const ReplyForm = ({ closeReply }: ReplyFormProps) => {
  return (
    <div className="post-reply">
      <button className="post-reply__close-reply" onClick={closeReply}>
        Close Reply
      </button>
      <h2 className="post-reply__heading">Reply to A Commenter</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <div>
        <form className="post-reply__form">
          <div className="post-reply__group">
            <label className="visually-hidden" htmlFor="post-name">
              Name:
            </label>
            <input id="post-name" type="text" placeholder="Type your name..." />
          </div>

          <div className="post-reply__group">
            <label className="visually-hidden" htmlFor="post-email">
              Email:
            </label>
            <input
              id="post-email"
              type="email"
              placeholder="Type your email..."
            />
          </div>

          <div className="post-reply__group">
            <label className="visually-hidden" htmlFor="post-website">
              Website:
            </label>
            <input
              id="post-website"
              type="text"
              placeholder="Type your website..."
            />
          </div>

          <div className="post-reply__group">
            <input type="checkbox" id="post-save-email" />
            <label htmlFor="post-save-email">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <div className="post-reply__group">
            <label className="visually-hidden" htmlFor="post-comment">
              Comment
            </label>
            <textarea
              id="post-comment"
              cols={30}
              rows={10}
              placeholder="Your Comment *"
              required
            ></textarea>
          </div>

          <div className="post-reply__group">
            <button type="submit" data-color="secondary">
              <span></span>
              <span></span>
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReplyForm;
