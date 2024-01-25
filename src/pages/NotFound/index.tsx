import { Link } from "react-router-dom";
import artexLogo from "../../assets/shared/arex-logo-light.png";
import notFoundBg from "../../assets/404/banner20.jpg";
import { Search } from "../../data/icons";
import usePageTitle from "../../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page Not Found");
  return (
    <section
      className="not-found"
      style={{ backgroundImage: `url('${notFoundBg}')` }}
    >
      <div className="not-found__wrapper">
        <img className="not-found__logo" src={artexLogo} alt="Artex Logo" />
        <h1 className="not-found__heading">404</h1>
        <h2 className="not-found__subheading">
          Sorry We Cannot Find That Page!
        </h2>
        <p className="not-found__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          libero? Ex dolore molestias repellendus.
        </p>
        <form className="not-found__form">
          <div className="not-found__form-group">
            <input
              className="not-found__search"
              type="search"
              id="not-found-search"
              placeholder="Search here"
            />
            <button className="not-found__button">
              <Search className="not-found__icon" />
            </button>
          </div>
        </form>
        <Link to="/artex" className="not-found__link common-link">
          Take Me Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
