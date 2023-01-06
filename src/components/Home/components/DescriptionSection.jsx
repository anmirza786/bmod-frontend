import React from "react";
import Video from "../../../Assets/videothumbHome.png";
import CustomModal from "../../Common/CustomModal";

function DescriptionSection(props) {
  return (
    <div className="description-section">
      <div className="container">
        <div className="flex row content">
          <div className="content-box">
            <h2 style={{ color: "white" }}>
              A whole new way for Entrepreneurs and Idea Makers to Raise
              Investments.
            </h2>
            <p style={{ color: "white" }}>
            BEMOD - The Business Model is as the name suggests a platform that will allow Entrepreneurs to show their business models to Investors and for Investors to look for authentic and interesting business models to invest in. Such a versatile platform does not exist currently in the market.
            </p>
            <p style={{ color: "white" }}>
            Users will be able to have online meetings with each other related to business models and only verified users allowed to invest or show their business models. For the verification of the business model, it would be required for the uploader of the business model to upload a verified authority certificate.
            </p>
          </div>
          <CustomModal
            button={
              <div className="videothumb">
                <img src={Video} alt="Thumbnail" />
              </div>
            }
            children={
              <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/UvWMlNZuQTc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
