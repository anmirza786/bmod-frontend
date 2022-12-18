import React from "react";
import ProfileCard from "./components/ProfileCard";
import GigDashboard from "./components/GigDashboard";
import DetailsCard from "./components/DetailsCard";

function Profile(props) {
  return (
    <div className="container">
      <div
        className="flex row"
        style={{ marginTop: "75px", justifyContent: "space-between" }}
      >
        <div className="profile-panel" style={{ minWidth: "280px" }}>
          <ProfileCard />
          <DetailsCard />
        </div>
        <div className="gig-panel">
          <GigDashboard />
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Profile;
