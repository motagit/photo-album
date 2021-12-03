import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import Loader from "react-loader-spinner";

const Posts = ({ allResults, posts, loading, images }) => {
  const [state, setState] = useState([{ photoIndex: 0, isOpen: false }]);

  if (loading) {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  const { photoIndex, isOpen } = state;
  return (
    <>
      {posts.map((search) => (
        <div className="col-sm-4">
          <Card style={{ marginTop: "20px" }}>
            <Card.Img
              className="img-fluid"
              variant="top"
              src={search.src.landscape}
              alt={search.photographer}
              title={search.photographer}
              onClick={() =>
                setState({
                  isOpen: true,
                  photoIndex: images.indexOf(search.id),
                })
              }
            />
          </Card>
        </div>
      ))}
      {isOpen && (
        <Lightbox
          imageTitle={"Photographer: " + allResults[photoIndex].photographer}
          mainSrc={allResults[photoIndex].src.large}
          nextSrc={
            allResults[(photoIndex + 1) % allResults.length].src.original
          }
          prevSrc={
            allResults[(photoIndex + allResults.length - 1) % allResults.length]
              .src.original
          }
          onCloseRequest={() => setState({ isOpen: false })}
          onMovePrevRequest={() =>
            setState({
              isOpen: true,
              photoIndex:
                (photoIndex + allResults.length - 1) % allResults.length,
            })
          }
          onMoveNextRequest={() =>
            setState({
              isOpen: true,
              photoIndex: (photoIndex + 1) % allResults.length,
            })
          }
          imageLoadErrorMessage="Loading..."
          enableZoom={false}
        />
      )}
    </>
  );
};

export default Posts;
