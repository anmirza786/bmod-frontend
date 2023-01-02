import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getidea } from "../../redux-implementation/actions";
import { REQUEST_URL } from "../../redux-implementation/constatntURLS";
function GigView({ getidea, state }) {
  const { id } = useParams();

  React.useEffect(() => {
    getidea(id);
  });
  return (
    <div className="container">
      {state.idea && (
        <div className="flex wrap" style={{ marginTop: "80px" }}>
          <div
            className="view-gig flex column"
            style={{
              width: "90%",
              backdropFilter: "blur(200px)",
              padding: "15px",
            }}
          >
            <h1
              className="is-size-2"
              style={{
                color: "white",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {state.idea.name}
            </h1>
            <img
              src={REQUEST_URL + state.idea.thumbnail}
              alt="Thumbnail"
              style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
            />
            <h3
              className="is-size-4"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Description:
            </h3>
            <p
              style={{
                color: "white",
                paddingBottom: "10px",
                borderBottom: "1px solid white",
              }}
            >
              {state.idea.description}
            </p>
            <div className="flex space-around">
              <h3 style={{ color: "white", fontWeight: "bold" }}>
                Total Investment Required
              </h3>
              <h3 style={{ color: "white" }}>
                $ {state.idea.required_investment}
              </h3>
            </div>
            <div className="flex space-around">
              <h3 style={{ color: "white", fontWeight: "bold" }}>
                Share Percentage in Total Investment Required
              </h3>
              <h3 style={{ color: "white" }}>
                {state.idea.investment_percentage}%
              </h3>
            </div>
            <div className="flex column">
              {/* <h3
                style={{ color: "white", margin: "5px 0", fontWeight: "bold" }}
              >
                About Entreprenure
              </h3> */}
              {/* <div className="flex" style={{ margin: "10px 0" }}>
                <img
                  src={Img}
                  alt=""
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className="flex column">
                  <h3 style={{ color: "white", margin: "5px 0" }}>
                    Name of Entreprenure
                  </h3>
                  <h3 style={{ color: "white", margin: "5px 0" }}>Ideas: 10</h3>
                  <h3 style={{ color: "white", margin: "5px 0" }}>
                    Date Joined: 20
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="flex flex-column profile-card"
            style={{ width: "300px", height: "max-content" }}
          >
            <div className="flex space-around mamber-since">
              <span style={{ color: "white", fontWeight: "bold" }}>
                Investment Required
              </span>
              <span style={{ color: "white" }}>
                ${state.idea.required_investment}
              </span>
            </div>
            <div className="flex space-around mamber-since">
              <span style={{ color: "white", fontWeight: "bold" }}>
                Share Percentage/Total
              </span>
              <span style={{ color: "white" }}>
                {state.idea.investment_percentage}%
              </span>
            </div>
            { !state.is_entreprenure && (
              <button
                className="button is-link"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Invest
              </button>
            )}
            {/* <button
              className="button is-Primary"
              style={{ width: "100%", marginTop: "10px" }}
            >
              Contact Entreprenure
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { getidea })(GigView);
