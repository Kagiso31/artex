import Map from "./Map";
import Info from "./Info";
import Form from "./Form";
import usePageTitle from "../../hooks/usePageTitle";

const Contact = () => {
  usePageTitle("Contact");
  return (
    <main>
      <Map />
      <Info />
      <Form />
    </main>
  );
};

export default Contact;
