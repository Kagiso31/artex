const Form = () => {
  return (
    <section className="faq-form-section">
      <h2 className="faq-form-section__heading">Still Need Query</h2>
      <p className="faq-form-section__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque
        magnam quam, culpa dignissimos minima delectus.
      </p>
      <form className="faq-form">
        <div className="faq-form__wrapper">
          <div className="faq-form__group">
            <label className="visually-hidden" htmlFor="faq-name">
              Your Name
            </label>
            <input
              id="faq-name"
              className="faq-form__name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="faq-form__group">
            <label className="visually-hidden" htmlFor="faq-email">
              Your Email
            </label>
            <input
              id="faq-email"
              className="faq-form__email"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="faq-form__group">
            <label className="visually-hidden" htmlFor="faq-phone">
              Phone Number
            </label>
            <input
              id="faq-phone"
              className="faq-form__phone"
              type="tel"
              placeholder="Phone No"
            />
          </div>
          <div className="faq-form__group">
            <label className="visually-hidden" htmlFor="faq-message">
              Type your message here
            </label>
            <textarea
              id="faq-message"
              cols={30}
              rows={10}
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="faq-form__group">
            <button
              className="faq-form__button"
              type="submit"
              data-color="secondary"
            >
              <span></span>
              <span></span>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
