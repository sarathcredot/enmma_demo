"use client";

import React, { useEffect, useState } from "react";
import BlogCard1 from "./BlogCard1";
import Pagination from "./Pagination";

export default function BlogPost({ style, showItem, showPagination, data }) {
  let [currentPage, setCurrentPage] = useState(1);
  let showLimit = showItem,
    paginationItem = 4;

  let [pagination, setPagination] = useState([]);
  let [limit, setLimit] = useState(showLimit);
  let [pages, setPages] = useState(Math.ceil(data.length / limit));

  useEffect(() => {
    cratePagination();
  }, [limit, pages, data.length]);

  const cratePagination = () => {
    let arr = new Array(Math.ceil(data.length / limit))
      .fill()
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(data.length / limit));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedBlogs = data.slice(startIndex, endIndex);

  let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  let end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };
  return (
    <>
      {getPaginatedBlogs.length === 0 && <h3>No Products Found </h3>}

      {getPaginatedBlogs.map((blog) => (
        <React.Fragment key={blog.id}>
          <BlogCard1 blog={blog} />
        </React.Fragment>
      ))}

      {showPagination && (
        <Pagination
          getPaginationGroup={getPaginationGroup}
          currentPage={currentPage}
          pages={pages}
          next={next}
          prev={prev}
          handleActive={handleActive}
        />
      )}
    </>
  );
}
