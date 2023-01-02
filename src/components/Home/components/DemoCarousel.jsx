/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function DemoCarousel(props) {
  return (
    <div className="carousel-element">
      <div className="container">
        <div className="search-box">
          <h1>
            Find the <span className="investor">investors</span> for your
            business idea in a <span className="modren">modren</span> and{" "}
            <span className="easy">easy way</span>.
          </h1>
          <form className="field is-grouped" style={{ marginTop: "20px",background: 'white',borderRadius: '5px' }}>
            <div
              className="control is-expanded"
              style={{
                margin: "0",
                borderRight: "none",
              }}
            >
              <input
                className="input"
                type="text"
                placeholder="Search an Idea."
              />
            </div>
            <div className="control">
              <a className="button is-info">Search</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DemoCarousel;
