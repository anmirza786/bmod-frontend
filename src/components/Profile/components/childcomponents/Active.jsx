import React from "react";
import ideas from "../../../../StaticData/ideas";
import AddGigCard from "./AddGigCard";
import GigCard from "./GigCard";

function Active(props) {
  const { user_id } = props;
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {ideas.map(
        (idea) =>
          idea.user === user_id &&
          idea.is_approved === true && (
            <GigCard key={idea._id} idea={idea} approved={idea.is_approved} />
          )
      )}
      <AddGigCard />
    </div>
  );
}

export default Active;
