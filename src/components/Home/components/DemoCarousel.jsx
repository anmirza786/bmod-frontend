import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function DemoCarousel(props) {
  const { ideas } = props;
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
            <img
              src={`http://localhost:5500/${idea.thumbnail}`}
              alt="cardimage"
            />
          </div>
          <div className="div-content">
            <p>
              {idea.description}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DemoCarousel;
