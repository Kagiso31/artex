import { PortfolioItem } from "../../data";

type ContentProps = {
  project: PortfolioItem | undefined;
};

const Content = ({ project }: ContentProps) => {
  const extractParagraph = (desc: string) => {
    const firstPara = desc.substring(0, desc.indexOf("\n"));
    const lastPara = desc.substring(desc.indexOf("\n"), desc.length);
    return [firstPara, lastPara];
  };
  if (!project) {
    return;
  }
  return (
    <section className="project-content">
      <div className="project-content__wrapper">
        <div className="project-content__grid">
          <div>
            <img className="project-content__img" src={project.img1} />
          </div>

          <div>
            <p className="project-content__desc">
              {extractParagraph(project.description1)[0]}
            </p>
            <p className="project-content__desc">
              {extractParagraph(project.description1)[1]}
            </p>
          </div>
        </div>

        <div>
          <img className="project-content__banner-img" src={project.img2} />
        </div>

        <div className="project-content__grid">
          <div>
            <p className="project-content__desc">
              {extractParagraph(project.description2)[0]}
            </p>
            <p className="project-content__desc">
              {extractParagraph(project.description2)[1]}
            </p>
          </div>

          <div>
            <img className="project-content__img" src={project.img3} />
          </div>
        </div>

        <div className="project-content__img-grid">
          <div>
            <img src={project.img4} />
          </div>

          <div>
            <img src={project.img5} />
          </div>
        </div>

        <p>{project.description3}</p>
      </div>
    </section>
  );
};

export default Content;
