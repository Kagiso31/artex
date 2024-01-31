import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import BackToTopButton from "../../components/BackToTopButton";
import SharedHero from "../SharedHero";
import useScrollToTop from "../../hooks/useScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const routesWithoutSharedHero = ["/artex", "/artex/", "/artex/404"];
  const match = routesWithoutSharedHero.find((route) => {
    if (location.pathname === route) return true;
  });
  useScrollToTop();

  if (match) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
  return (
    <>
      <Header />
      <SharedHero />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default RootLayout;
