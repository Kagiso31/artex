import { Link } from "react-router-dom";
import { galleryProjects } from "../../data";

const Gallery = () => {
  return (
    <section className="sidebar-gallery">
      <h2 className="sidebar-gallery__heading">Our Latest Gallery</h2>
      <div className="sidebar-gallery__grid">
        {galleryProjects.map((project) => (
          <div className="sidebar-gallery__project" key={project.id}>
            <Link to={project.url}>
              <img src={project.img} alt={project.title} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
