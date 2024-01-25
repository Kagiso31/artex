const Form = () => {
  return (
    <section className="contact-form-section">
      <h2>Drop Us a Line</h2>
      <div className="contact-form__wrapper">
        <form className="contact-form">
          <div className="contact-form__group">
            <label className="visually-hidden" htmlFor="contact-name">
              Your Name
            </label>
            <input id="contact-name" placeholder="Your Name" type="text" />
          </div>

          <div className="contact-form__group">
            <label className="visually-hidden" htmlFor="contact-email">
              Your Email
            </label>
            <input id="contact-email" placeholder="Your Email" type="email" />
          </div>

          <div className="contact-form__group">
            <label className="visually-hidden" htmlFor="cell-no">
              Phone Number
            </label>
            <input id="cell-no" placeholder="Phone No" type="tel" />
          </div>

          <div className="contact-form__group">
            <label className="visually-hidden" htmlFor="tel-no">
              Phone Number
            </label>
            <input id="tel-no" placeholder="Phone No" type="tel" />
          </div>

          <div className="contact-form__group">
            <label className="visually-hidden" htmlFor="message">
              Type your message here
            </label>
            <textarea
              id="message"
              cols={30}
              rows={10}
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div className="contact-form__group">
            <button
              className="contact-form__button"
              type="submit"
              data-color="secondary"
            >
              <span></span>
              <span></span>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
