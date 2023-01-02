import React from "react";
import { connect } from "react-redux";
import GigCard from "../Profile/components/childcomponents/GigCard";
function Ideas({ state }) {
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {state.ideas &&
          state.ideas.map((idea) => (
            <GigCard
              key={idea._id}
              idea={idea}
              approved={idea.is_approved}
              isideapage={true}
            />
          ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Ideas);
