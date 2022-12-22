import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { REQUEST_URL } from "../../../redux-implementation/constatntURLS";

function DemoCarousel(props) {
  const { ideas } = props;
  console.log(ideas);
  return (
    <Carousel
      autoPlay={true}
      // dynamicHeight={true}
      infiniteLoop={true}
      interval={3000}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {ideas.map((idea) => (
        <div className="carousel-element">
          <div className="div-img">
            <img src={REQUEST_URL + idea.thumbnail} alt="cardimage" />
          </div>
          <div className="div-content">
            <p>{idea.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DemoCarousel;
