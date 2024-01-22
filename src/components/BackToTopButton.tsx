import { useEffect, useState } from "react";
import { ChevronDoubleUp } from "../data/icons";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top" onClick={backToTop}>
          <ChevronDoubleUp className="back-to-top__icon" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
