import React from "react";
import investors from "../../StaticData/investors";

function Card(props) {
  const { idea } = props;
  // const { progress, setProgress } = React.useState(0);
  function getProgress() {
    let count = 0;
    investors.map((investor) => {
      if (investor.idea === idea._id) {
        count = count + investor.invested;
      }
    });
    let percentage = (count / idea.required_investment) * 100;
    return percentage;
  }
  console.log(getProgress());
  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={`http://localhost:5500/${idea.thumbnail}`} alt="cardimage" />
      </div>
      <div className="content-card">
        <h3>{idea.name}</h3>
        <p
          style={{
            width: "100%",
            height: "70px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {idea.description}
        </p>
        <p>Share Percentage: {idea.investment_percentage}%</p>
        <p>Total Investment Required: ${idea.required_investment}</p>

        <div className="progress-bar">
          <progress
            className="progress is-primary"
            value={getProgress()}
            max="100"
          >
            {getProgress()}
          </progress>
        </div>
      </div>
    </div>
  );
}

export default Card;
