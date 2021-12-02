import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.scss";
import { Card, Container } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function FirstBook() {
  const [result, setResult] = useState([]);
  const [state, setState] = useState([{ photoIndex: 0, isOpen: false }]);
  var images = [];

  function handleSubmit() {
    const url = "https://api.pexels.com/v1/search?query=" + "dog" + "&per_page=" + 18;
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
      });
  }

  for (var i = 0; i < result.length; i++) {
    images.push(result[i].id);
  }

  useEffect(() => handleSubmit(), []);
  
  const { photoIndex, isOpen } = state;
  return (
    <>
      <Container>
        <div className="row">
          {result.map((search) => (
            <div className="col-sm-4">
              <Card style={{ marginTop: "10px" }}>
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={search.src.landscape}
                  alt={search.photographer}
                  title={search.photographer}
                  onClick={() => setState({ isOpen: true, photoIndex: images.indexOf(search.id)})}
                  
                />
              </Card>
            </div>
          ))}
        </div>
      </Container>
      {isOpen && (
        <Lightbox
          imageTitle={"Photographer: " + result[photoIndex].photographer}
          mainSrc={result[photoIndex].src.original}
          nextSrc={result[(photoIndex + 1) % result.length].src.original}
          prevSrc={result[(photoIndex + result.length - 1) % result.length].src.original}
          onCloseRequest={() => setState({ isOpen: false })}
          onMovePrevRequest={() =>
            setState({
              isOpen: true,
              photoIndex: (photoIndex + result.length - 1) % result.length
            })
          }
          onMoveNextRequest={() =>
            setState({
              isOpen: true,
              photoIndex: (photoIndex + 1) % result.length
            })
          }
          imageLoadErrorMessage="Loading..."
          enableZoom={false}
        />
      )}
    </>
  );
}

export default FirstBook;
