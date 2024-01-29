import { Search } from "../../data/icons";

const SearchForm = () => {
  return (
    <div className="sidebar-search">
      <form className="sidebar-search__form">
        <label htmlFor="sidebar-search-input" className="visually-hidden">
          Search
        </label>
        <div className="sidebar-search__input-container">
          <input
            type="search"
            name="sidebar-search-input"
            id="sidebar-search-input"
            placeholder="Search Keywords ..."
            className="sidebar-search__input"
          />
          <button className="sidebar-search__button">
            <Search className="sidebar-search__icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
