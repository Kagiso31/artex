import { services } from "../../data/services";
import { ServiceCard } from "../../data";
import serviceImg from "../../assets/home/service1.jpg";

const Services = () => {
  return (
    <section aria-labelledby="services-heading" className="services">
      <div className="services__wrapper">
        <div className="services__text">
          <h2 id="services-heading" className="services__heading">
            Our Services
          </h2>

          <p className="services__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim
            mollitia ducimus natus officiis quam distinctio?
          </p>
        </div>

        <div className="services__grid-container">
          <img className="services__img" src={serviceImg} alt="Service Image" />

          <div className="services__cards">
            {services.map((service) => (
              <ServicesCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesCard = ({ icon, heading, body }: ServiceCard) => {
  return (
    <div className="services-card">
      <div className="services-card__icon">{icon}</div>
      <h3 className="services-card__heading">{heading}</h3>
      <p className="services-card__body">{body}</p>
    </div>
  );
};

export default Services;
