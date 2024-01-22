import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import BackToTopButton from "../../components/BackToTopButton";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default RootLayout;
