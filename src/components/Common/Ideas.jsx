import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { LoadingComponent } from "./LoadingComponent";
import { useLocation } from "react-router-dom";
import Img from "../../Assets/background.png";
function Ideas({ state }) {
  const location = useLocation();
  React.useEffect(()=>{
    if (location.pathname === "/home") {
      const body = document.getElementsByTagName("body");
      body[0].style.background = "#472169";
      console.log(body[0], body[0].style);
    } else {
      const body = document.getElementsByTagName("body");
      body[0].style.background = `url(${Img})`;
      console.log(body[0], body[0].style);
    }
  })
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {location.pathname === "/search" ? (
          state.search &&
          state.search.map((idea) =>
            idea.is_approved ? <Card key={idea._id} idea={idea} /> : ""
          )
        ) : state.ideas ? (
          state.ideas.map((idea) =>
            idea.is_approved ? <Card key={idea._id} idea={idea} /> : ""
          )
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Ideas);
