import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.scss";

import Posts from "../Posts";
import Pages from "../Pages";

function Photos() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);
  var images = [];

  useEffect(() => {
    const handleSubmit = () => {
      setLoading(true);
      const url = "https://api.pexels.com/v1/search?query=dog&per_page=72";
      const access_token =
        "563492ad6f91700001000001e0ce4b4d3e2d409d8afbc267eccc18d6";
      axios
        .get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((data) => {
          setResult(data.data.photos);
          setLoading(false);
        });
    };
    handleSubmit();
  }, []);

  for (var i = 0; i < result.length; i++) {
    images.push(result[i].id);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Row>
          <Posts
            allResults={result}
            posts={currentPosts}
            loading={loading}
            images={images}
          />
        </Row>
        <Pages
          postsPerPage={postsPerPage}
          totalPosts={result.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}

export default Photos;
