import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
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
        <div className="carousel-element">
          <div className="div-img">
            <img src="https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/login.png" />
          </div>
          <div className="div-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum voluptatibus sapiente totam nemo itaque odit amet sint,
              temporibus quo tenetur reprehenderit, eos quisquam debitis
              provident dolorem voluptatum impedit reiciendis!
            </p>
          </div>
        </div>
        <div className="carousel-element">
          <div className="div-img">
            <img src="https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/error-response.png" />
          </div>
          <div className="div-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum voluptatibus sapiente totam nemo itaque odit amet sint,
              temporibus quo tenetur reprehenderit, eos quisquam debitis
              provident dolorem voluptatum impedit reiciendis!
            </p>
          </div>
        </div>
        <div className="carousel-element">
          <div className="div-img">
            <img src="https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/success-response.png" />
          </div>
          <div className="div-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum voluptatibus sapiente totam nemo itaque odit amet sint,
              temporibus quo tenetur reprehenderit, eos quisquam debitis
              provident dolorem voluptatum impedit reiciendis!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
