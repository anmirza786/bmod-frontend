import React from "react";
import AddGigCard from "./AddGigCard";
import GigCard from "./GigCard";

function Active(props) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      <GigCard />
      <AddGigCard />
    </div>
  );
}

export default Active;
