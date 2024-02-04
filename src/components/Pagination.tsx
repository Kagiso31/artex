import { ChevronDoubleLeft, ChevronDoubleRight } from "../data/icons";
import { usePagination, DOTS } from "../hooks/usePagination";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
};

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (!paginationRange) {
    return;
  }
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    window.scrollTo(0, 0);
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    window.scrollTo(0, 0);
    onPageChange(currentPage - 1);
  };

  const onChange = (pageNumber: number) => {
    window.scrollTo(0, 0);
    onPageChange(pageNumber);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination">
      <ul className={`pagination__container`}>
        {/* Left navigation arrow */}
        <li
          className={`${
            currentPage === 1
              ? "pagination__item pagination__item--disabled"
              : "pagination__item"
          }`}
          onClick={onPrevious}
        >
          <ChevronDoubleLeft className="pagination__arrow" />
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination__item dots">&#8230;</li>;
          }
          // Render our Page Pills
          return (
            <li
              key={pageNumber}
              className={`${
                pageNumber === currentPage
                  ? "pagination__item pagination__item--selected"
                  : "pagination__item"
              }`}
              onClick={() => onChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          className={`${
            currentPage === lastPage
              ? "pagination__item pagination__item--disabled"
              : "pagination__item"
          }`}
          onClick={onNext}
        >
          <ChevronDoubleRight className="pagination__arrow" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

/* https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/ */
