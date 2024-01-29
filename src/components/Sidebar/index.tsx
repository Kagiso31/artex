import Gallery from "./Gallery";
import ProductCategories from "./ProductCategories";
import RecentNews from "./RecentNews";
import SearchForm from "./SearchForm";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div>
      <SearchForm />
      <ProductCategories />
      <RecentNews />
      <Gallery />
      <Tags />
    </div>
  );
};

export default Sidebar;
