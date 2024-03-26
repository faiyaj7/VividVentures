import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="list-reset flexContainer !justify-start">
        {items.map((item, index) => (
          <li
            key={index}
            className="flexContainer text-sm font-medium text-black/65"
          >
            {index < items.length - 1 ? (
              <Link href="/" className="text-primary hover:text-primary-600 ">
                {item === "Home" ? <IoMdHome /> : item}
              </Link>
            ) : (
              <span className="">{item}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-neutral-500"> &gt; </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
