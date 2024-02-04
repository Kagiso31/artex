import { useEffect } from "react";

const usePageTitle = (title?: string) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} – Artex`;
    } else {
      document.title = "Artex – Architecure & Interior Design";
    }
  }, [title]);
};

export default usePageTitle;
