import { useState } from "react";
import { Link } from "react-router-dom";
import { navList, socialList } from "../../data";
import { Close, Hamburger } from "../../data/icons";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((isOpen) => !isOpen);
  return (
    <>
      {/* hamburger & mobile menu */}
      <div className="menu">
        <div
          onClick={toggleMenu}
          className={`menu__overlay ${isOpen ? "open" : "closed"}`}
        ></div>

        <button className="menu__hamburger" onClick={toggleMenu}>
          <Hamburger className="menu__hamburger-icon" />
        </button>

        <div className={`menu__container ${isOpen ? "open" : "closed"}`}>
          <div className="menu__header">
            <button className="menu__close" onClick={toggleMenu}>
              <Close className="menu__close-icon" />
            </button>
          </div>

          <nav className="menu__nav">
            <ul role="list" className="menu__nav-list">
              {navList.map((link) => (
                <li key={link.id} className="menu__nav-item">
                  <Link className="menu__nav-link" to={link.url}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__social">
            <ul role="list" className="menu__social-list">
              {socialList.map((link) => (
                <li key={link.id} className="menu__social-item">
                  <a
                    href={link.url}
                    target="_blank"
                    className={`menu__social-link menu__social-link--${link.title}`}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="menu__attribution">
            &copy; {new Date().getFullYear()} Artex. Designed by{" "}
            <a
              className="menu__attribution-link"
              href="https://www.radiustheme.com/"
              target="_blank"
            >
              RadiusTheme
            </a>
            .
            <br /> Developed by{" "}
            <a
              className="menu__attribution-link"
              href="https://www.github.com/Kagiso31"
              target="_blank"
            >
              @Kagiso31
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
