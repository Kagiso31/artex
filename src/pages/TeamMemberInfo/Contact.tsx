import { TeamMember } from "../../data";

type ContactProps = {
  member: TeamMember | undefined;
};

const Contact = ({ member }: ContactProps) => {
  if (!member) {
    return;
  }
  return (
    <section
      aria-labelledby="member-contact"
      className="member-contact member-item"
    >
      <div className="member-contact__wrapper member-item__wrapper">
        <div className="member-contact__heading-container member-item__heading-container">
          <h2
            id="member-contact"
            className="member-contact__heading member-item__heading"
          >
            Contact Me
          </h2>
        </div>

        <div className="member-contact__body member-item__body">
          <form className="member-contact__form">
            <div className="member-contact__form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="member-contact__form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="member-contact__form-group">
              <textarea cols={30} rows={10} placeholder="Comment *"></textarea>
            </div>
            <div className="member-contact__form-group">
              <button
                className="member-contact__form-button"
                type="submit"
                data-color="primary"
              >
                <span></span>
                <span></span>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
