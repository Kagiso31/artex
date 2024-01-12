import { services } from "../../data/services";

const Services = () => {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim
        mollitia ducimus natus officiis quam distinctio?
      </p>
      {services.map((service) => (
        <div key={service.id}>{service.icon}</div>
      ))}
    </section>
  );
};

export default Services;
