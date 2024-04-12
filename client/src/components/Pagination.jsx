import React, { useState } from "react";

const Pagination = ({ filteringOptions, setFilteringOptions, productInfo }) => {
  let page = filteringOptions.page;
  page--;
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 ">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {page * productInfo.resultPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 ">
            {page * productInfo.resultPerPage +
              productInfo.filteredProductsCount}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {productInfo.productCount}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={(e) => {
              setFilteringOptions((prevState) => ({
                ...prevState,
                page: prevState.page - 1,
              }));
            }}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 "
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            onClick={(e) => {
              setFilteringOptions((prevState) => ({
                ...prevState,
                page: prevState.page + 1,
              }));
            }}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 "
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
