import React from "react";
import ProfileCard from "./components/ProfileCard";
import GigDashboard from "./components/GigDashboard";
import DetailsCard from "./components/DetailsCard";
import users from "../../StaticData/users";

function Profile(props) {
  let a;
  const [is, setIs] = React.useState({});
  React.useEffect(() => {
    const u = users.filter(
      (user) => user._id === localStorage.getItem("user_id")
    );
    setIs(u[0]);
    // a = u[0];
  }, [is]);
  return (
    <div className="container">
      <div
        className="flex row"
        style={{ marginTop: "75px", justifyContent: "space-between" }}
      >
        <div className="profile-panel" style={{ minWidth: "280px" }}>
          <ProfileCard user={is} />
          <DetailsCard userid={is && is._id} />
        </div>
        <div className="gig-panel">
          <GigDashboard />
          {React.cloneElement(props.children, { user_id: is._id })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
