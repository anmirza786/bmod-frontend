import React from "react";
import ideas from "../../../../StaticData/ideas";
import GigCard from "./GigCard";

function Pending(props) {
  const { user_id } = props;
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {ideas.map(
        (idea) =>
          idea.user === user_id &&
          idea.is_approved === false && (
            <GigCard key={idea._id} idea={idea} approved={idea.is_approved} />
          )
      )}
    </div>
  );
}

export default Pending;
