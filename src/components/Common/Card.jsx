import React from "react";
import Back from "../../Assets/background.png";

function Card(props) {
  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={Back} alt="cardimage" />
      </div>
      <div className="content-card">
        <h3>Business Name</h3>
        <p>3 Line Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae explicabo minima tempore aliquam eveniet</p>
        <p>Share Percentage</p>
        <p>Total Investment Required</p>

        <div className="progress-bar">
          <progress className="progress is-primary" value="15" max="100">
            15%
          </progress>
        </div>
      </div>
    </div>
  );
}

export default Card;
