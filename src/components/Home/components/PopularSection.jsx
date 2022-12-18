import React from "react";
import Card from "../../Common/Card";
function PopularSection(props) {
  return (
    <div>
      <h2 className="has-text-centered is-size-2" style={{ color: "white" }}>
        Popular
      </h2>
      <div className="container">
        <div className="flex space-evenly wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default PopularSection;
