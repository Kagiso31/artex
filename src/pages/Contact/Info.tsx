import contactImg from "../../assets/contact/contact-img.jpg";
import { Phone } from "../../data/icons";

const Info = () => {
  return (
    <section className="contact-info">
      <div className="contact-info__wrapper">
        <div className="contact-info__card">
          <div className="contact-info__img-container">
            <img className="contact-info__img" src={contactImg} />
          </div>

          <div className="contact-info__text">
            <h3 className="contact-info__title">Brooklyn, New York</h3>
            <p>
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </p>
            <a className="contact-info__tel" href="tel:+546475414518">
              <Phone className="contact-info__icon" />
              +54 647 541 4518
            </a>
            <p className="contact-info__email">
              <span>Email:</span> contact@example.com
            </p>
            <p className="contact-info__address">
              <span>Address 2:</span> Via Cesare Rosaroll st. 118, 80139 Sofia
              analota, jackson hytes, american.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
