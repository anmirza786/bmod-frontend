import React from "react";
import Img from "../../../../Assets/background.png";
import { Link } from "react-router-dom";

function GigCard(props) {
  const [showTooltip, setToolTip] = React.useState(false);
  const [visibleClass, setVisibleClass] = React.useState("gig-menu");
  const mouseOver = () => {
    console.log("Mouse Over");
    setToolTip(true);
    setVisibleClass("gig-menu visible");
  };
  const mouseOut = () => {
    console.log("Mouse Out");
    setToolTip(false);
    setVisibleClass("gig-menu");
  };
  return (
    <Link
      to={`/idea/${props.idea._id}`}
      className="gig-card-base active-gig-card"
    >
      <span>
        <ul className={visibleClass} onMouseLeave={mouseOut}>
          <li>
            <i className="fa fa-eye"></i> Preview
          </li>
          {!props.approved && (
            <li>
              <i className="fa fa-pencil"></i> Edit
            </li>
          )}
          <li>
            <i className="fa fa-line-chart"></i> Statistics
          </li>
          {/* <li></li>
          <li className=""></li>
          <li></li> */}
        </ul>
        <div className="header-gig-card">
          <Link to={`/idea/${props.idea._id}`}>
            <div>
              <figure>
                <img src={Img} alt="titleimage" />
              </figure>
            </div>
            <section className="gig-title">
              <header style={{ padding: "0 10px", color: "white" }}>
                <h3>Hello There this is just a trial for checking.</h3>
              </header>
            </section>
          </Link>
        </div>
        <div
          className="btn-gig-menu hint--top"
          onMouseOver={mouseOver}
          //   onMouseOut={mouseOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="10"
            viewBox="0 0 42 10"
          >
            <path
              fill="#C6C6C6"
              d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
            ></path>
          </svg>
        </div>
      </span>
    </Link>
  );
}

export default GigCard;
