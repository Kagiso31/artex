import { Link } from "react-router-dom";
import artexLogo from "../../assets/shared/arex-logo-light.png";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import SearchForm from "./SearchForm";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const scrollWatcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navObserver = new IntersectionObserver((entries) => {
      headerRef.current?.classList.toggle(
        "header--sticking",
        !entries[0].isIntersecting
      );
    });

    if (scrollWatcherRef.current !== null) {
      navObserver.observe(scrollWatcherRef.current);
    }
  }, []);

  return (
    <>
      <div ref={scrollWatcherRef} data-scroll-watcher />
      <header ref={headerRef} className="header">
        <Link className="header__link" to="/artex">
          <img className="header__logo" src={artexLogo} alt="Artex Logo" />
        </Link>
        <Navbar />
        <SearchForm />

        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
