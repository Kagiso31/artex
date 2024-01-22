import { useEffect, useRef } from "react";
import { brands } from "../data/brandScroller";

const BrandScroller = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    wrapperRef.current?.setAttribute("data-animated", "true");
    const scrollerChildren = Array.prototype.slice.call(
      innerRef.current?.children
    );

    scrollerChildren.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      innerRef.current?.appendChild(duplicatedItem);
    });
  };

  return (
    <section aria-label="Brands" className="brand-scroller">
      <div ref={wrapperRef} className="brand-scroller__wrapper">
        <div ref={innerRef} className="brand-scroller__inner">
          {brands.map(({ id, name, logo }) => (
            <img
              ref={imgRef}
              className="brand-scroller__img"
              key={id}
              src={logo}
              alt={name}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
