import { Link } from "react-router-dom";
import { companyInfo, contact, quickLinks, galleryProjects } from "../../data";

const Footer = () => {
  return (
    <footer className="footer">
      {/* top */}
      <div className="footer__top">
        <div className="footer__top-wrapper">
          {/* logo & desc */}
          <div className="footer__section">
            <img
              className="footer__logo"
              src={companyInfo.logo}
              alt="Artex Logo"
            />
            <div className="footer__section-container">
              <p className="footer__desc">{companyInfo.desc}</p>
              <ul role="list" className="footer__socials">
                {companyInfo.socials.map((social) => (
                  <li key={social.id}>
                    <a className="footer__social" href={social.url}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* address */}
          <div className="footer__section">
            <h3 className="footer__heading">Our Address</h3>
            <div className="footer__section-container">
              <p className="footer__address">{contact.address}</p>
              <a className="footer__tel" href={`tel:${contact.tel.telNumber}`}>
                {contact.tel.title}
              </a>
              <a className="footer__email" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>

          {/* links */}
          <div className="footer__section">
            <h3 className="footer__heading">Quick Links</h3>
            <nav>
              <ul role="list" className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link className="footer__link" to={link.url}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* gallery */}
          <div className="footer__section">
            <h3 className="footer__heading">Our Gallery</h3>
            <div className="footer__gallery">
              {galleryProjects.map((project) => (
                <div className="footer__project" key={project.id}>
                  <Link to={project.url}>
                    <img src={project.img} alt={project.title} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="footer__bottom">
        <p className="footer__attribution">
          Copyright © {new Date().getFullYear()} Artex. Designed by{" "}
          <a
            className="footer__attribution-link"
            href="https://www.radiustheme.com/"
          >
            Radiustheme.
          </a>{" "}
          <br />
          Developed by{" "}
          <a
            className="footer__attribution-link"
            href="https://www.github.com/Kagiso31"
          >
            @Kagiso31.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
