import { NavLink } from "react-router-dom";
import { navList } from "../../data";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul role="list" className="nav__list">
          {navList.map((link) => (
            <li key={link.id} className="nav__item">
              {link.title === "Home" ? (
                <NavLink className="nav__link" to={link.url} end>
                  {link.title}
                </NavLink>
              ) : (
                <NavLink className="nav__link" to={link.url}>
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
