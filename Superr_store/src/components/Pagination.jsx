/* eslint-disable react/prop-types */
import React from "react";

const PaginationComponent = ({ pageCount, onPageChange, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      <div className="py-12 flex items-center justify-center gap-6">
        <div className="flex gap-3 text-blue-500 text-xl sm:text-2xl">
          {pageNumbers.map((number, index) => (
            <button
              key={index}
              className={`${
                currentPage === number - 1
                  ? "focus:outline-none focus:text-app-black-1 focus:text-2xl sm:focus:text-3xl transition-all ease-in duration-200"
                  : "text-gray-500"
              } text-app-black-1 active:text-2xl sm:focus:text-3xl`}
              onClick={() => onPageChange(number - 1)}
            >
              {number}
            </button>
          ))}
          <p>...</p>
        </div>
        <button
          className="bg-app-orange text-app-bg px-4 py-2 rounded-xl focus:border-app-black-2 focus:border-2 focus:outline-none"
          onClick={() => onPageChange((currentPage = currentPage + 1))}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

const Pagination = React.memo(PaginationComponent);
Pagination.displayName = "Pagination";

export default Pagination;
