import React from "react";
import { connect } from "react-redux";
import ideas from "../../../../StaticData/ideas";
import AddGigCard from "./AddGigCard";
import GigCard from "./GigCard";

function Active({ state }) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {state.user &&
        state.ideas &&
        state.ideas.map(
          (idea) =>
            idea.user !== state.user._id &&
            idea.is_approved === true && (
              <GigCard key={idea._id} idea={idea} approved={idea.is_approved} />
            )
        )}
      <AddGigCard />
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Active);
