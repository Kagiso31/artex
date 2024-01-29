import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <section
      className="product-categories"
      aria-labelledby="product-categories-heading"
    >
      <h2
        className="product-categories__heading"
        id="product-categories-heading"
      >
        Product Categories
      </h2>
      <ul role="list">
        <li className="product-categories__item">
          <Link className="product-categories__link" to="#">
            Architecture
          </Link>{" "}
          <span>(4)</span>
        </li>
        <li className="product-categories__item">
          <Link className="product-categories__link" to="#">
            Commercial
          </Link>{" "}
          <span>(3)</span>
        </li>
        <li className="product-categories__item">
          <Link className="product-categories__link" to="#">
            Decoration
          </Link>{" "}
          <span>(2)</span>
        </li>
        <li className="product-categories__item">
          <Link className="product-categories__link" to="#">
            Infrastructure
          </Link>{" "}
          <span>(3)</span>
        </li>
        <li className="product-categories__item">
          <Link className="product-categories__link" to="#">
            Interior
          </Link>{" "}
          <span>(3)</span>
        </li>
      </ul>
    </section>
  );
};

export default ProductCategories;
