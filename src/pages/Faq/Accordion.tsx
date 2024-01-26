import { useRef, useState } from "react";
import { FaqAccordionItem } from "../../data";
import { faqAccordion } from "../../data/faq";
import { Minus, Plus } from "../../data/icons";

const Accordion = () => {
  const firstFourItems = faqAccordion.slice(0, 4);
  const lastFourItems = faqAccordion.slice(-4);

  return (
    <section className="faq-accordion">
      <div className="faq-accordion__wrapper">
        <div className="faq-accordion__grid">
          <div>
            {firstFourItems.map((item) => (
              <FaqAccordionCard key={item.id} {...item} />
            ))}
          </div>
          <div>
            {lastFourItems.map((item) => (
              <FaqAccordionCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqAccordionCard = ({ title, body }: FaqAccordionItem) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const expandIcon = <Plus className="faq-accordion-panel__icon" />;
  const minimiseIcon = <Minus className="faq-accordion-panel__icon" />;
  const [icon, setIcon] = useState(expandIcon);

  const handleClick = () => {
    const activePanel = panelRef.current?.closest(".faq-accordion-panel");
    if (!activePanel) {
      return;
    }
    if (buttonRef.current && contentRef.current && panelRef.current) {
      const isOpen = buttonRef.current.ariaExpanded === "true";
      if (isOpen) {
        buttonRef.current.ariaExpanded = "false";
        contentRef.current.ariaHidden = "true";
        setIcon(expandIcon);
      } else {
        buttonRef.current.ariaExpanded = "true";
        contentRef.current.ariaHidden = "false";
        setIcon(minimiseIcon);
      }
    }
  };
  return (
    <div ref={panelRef} className="faq-accordion-panel" onClick={handleClick}>
      <h3 className="faq-accordion-panel__title">
        <button
          className="faq-accordion-panel__button"
          aria-expanded="false"
          ref={buttonRef}
        >
          {title}
          {icon}
        </button>
      </h3>
      <div
        className="faq-accordion-panel__content"
        aria-hidden="true"
        ref={contentRef}
      >
        <div>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
