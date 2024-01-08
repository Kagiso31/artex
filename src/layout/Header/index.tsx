import { Link } from "react-router-dom";
import artexLogo from "../../assets/shared/arex-logo-light.png";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/artex">
        <img className="header__logo" src={artexLogo} alt="Artex Logo" />
      </Link>
      <Navbar />
      <SearchForm />

      <MobileMenu />
    </header>
  );
};

export default Header;
