import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";

const Pages = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      size="lg"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={(window.scrollTo(0, 0), () => paginate(number))}
          href={"#" + number}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
