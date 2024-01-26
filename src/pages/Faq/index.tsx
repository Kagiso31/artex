import usePageTitle from "../../hooks/usePageTitle";
import Accordion from "./Accordion";
import Form from "./Form";
import Intro from "./Intro";

const Faq = () => {
  usePageTitle("FAQ");
  return (
    <main>
      <Intro />
      <Accordion />
      <Form />
    </main>
  );
};

export default Faq;
