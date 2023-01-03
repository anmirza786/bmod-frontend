import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getidea } from "../../redux-implementation/actions";
import { REQUEST_URL } from "../../redux-implementation/constatntURLS";
import PayPalCheckout from "../Common/PaypalCheckout";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// import paypal from "paypal-checkout";
// let ReactButton = paypal.Button.driver("react", {
//   React: window.React,
//   ReactDOM: window.ReactDOM,
// });
function GigView({ getidea, state }) {
  const { id } = useParams();
  const [investment, setInvestment] = React.useState(0);

  React.useEffect(() => {
    getidea(id);
  }, []);
  function showPaymentForm() {
    document.getElementById("invest-button").style.display = "none";
    document.getElementById("invest-form").style.display = "flex";
  }
  function onChangeinvestment(e) {
    setInvestment(e.target.value);
    let mininvestment = state.idea.required_investment * 0.3;
    console.log(mininvestment);
    if (investment > mininvestment) {
      return false;
    } else return true;
  }
  function showPayPal(e) {
    e.preventDefault();
    // document.getElementById("invest-form").style.display = "none";
    document.getElementById("paypal").style.display = "flex";
  }
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
            {!state.is_entreprenure && (
              <button
                id="invest-button"
                className="button is-link"
                style={{ width: "100%", marginTop: "10px" }}
                onClick={showPaymentForm}
              >
                Invest
              </button>
            )}
            <form
              onSubmit={showPayPal}
              id="invest-form"
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <input
                type="number"
                className="input"
                placeholder="Investment"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
              />
              <input
                type="submit"
                value="Invest"
                className="button"
                disabled={onChangeinvestment}
              />
            </form>
            <div
              id="paypal"
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              {/* <PayPalScriptProvider>
                <PayPalButtons />
              </PayPalScriptProvider> */}

              {investment > 0 && (
                <PayPalCheckout total={investment} idea={id} />
              )}
            </div>
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
