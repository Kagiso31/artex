import { useState } from "react";
import { featureItems, featureBackgrounds } from "../../data";

const Features = () => {
  const [wrapperEntered, setWrappperEntered] = useState(false);
  const [itemEntered, setItemEntered] = useState<number | null>(null);

  const handleWrapper = () => {
    setWrappperEntered((entered) => !entered);
  };

  return (
    <section aria-label="Features" className="features">
      <div
        onMouseEnter={handleWrapper}
        onMouseLeave={handleWrapper}
        className="features__wrapper"
      >
        {/* bg items */}
        <div
          className={`${
            wrapperEntered
              ? "features__backgrounds features__backgrounds--active"
              : "features__backgrounds"
          }`}
        >
          {featureBackgrounds.map(({ id, bgImg }) => (
            <div
              key={id}
              className={`${
                itemEntered === id
                  ? "features__background features__background--show"
                  : "features__background"
              }`}
              style={{ backgroundImage: `url('${bgImg}')` }}
            />
          ))}
        </div>

        {/* feature items */}
        <div
          className={`${
            wrapperEntered
              ? "features__items features__items--active"
              : "features__items"
          }`}
        >
          {featureItems.map(({ id, heading, subheading, bgImg }) => (
            <div
              key={id}
              onMouseEnter={() => setItemEntered(id)}
              onMouseLeave={() => setItemEntered(null)}
              className={`${
                itemEntered !== null && itemEntered !== id
                  ? "features__item features__item--hide"
                  : "features__item"
              }`}
            >
              <div
                className="features__item-bg"
                style={{ backgroundImage: `url('${bgImg}')` }}
              />
              <div className="features__item-text">
                <h3 className="features__item-heading">{heading}</h3>
                <p className="features__item-subheading">{subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
