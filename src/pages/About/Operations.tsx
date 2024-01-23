import { operations } from "../../data/operations";

const Operations = () => {
  return (
    <section aria-labelledby="how-we-work" className="operations">
      <div className="operations__wrapper">
        <div className="operations__text">
          <h2 id="how-we-work" className="operations__heading">
            How We Work
          </h2>
          <p className="operations__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi
            iusto laboriosam placeat vitae consequuntur natus.
          </p>
        </div>
        <div className="operations__cards">
          {operations.map(({ id, title, body, icon }) => (
            <div className="operations-card" key={id}>
              <div className="operations-card__icon-container">{icon}</div>
              <h3 className="operations-card__title">{title}</h3>
              <p className="operations-card__body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;
