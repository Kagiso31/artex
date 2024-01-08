import { useState } from "react";
import { Search } from "../../data/icons";

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearch = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="search">
      <button onClick={toggleSearch} className="search__button">
        <Search className="search__icon" />
      </button>

      <form className={`search__form ${isOpen ? "open" : "closed"}`}>
        <label htmlFor="search" className="search__label visually-hidden">
          Search
        </label>

        <div className="search__input-container">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="search__input"
            disabled={!isOpen}
          />
          <button className="search__submit">
            <Search className="search__submit-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
