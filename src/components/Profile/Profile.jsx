import React from "react";
import { connect } from "react-redux";
import ProfileCard from "../Common/ProfileCard";
import GigDashboard from "./components/GigDashboard";
import { load_user } from "../../redux-implementation/actions";

function Profile({ state, load_user, children }) {
  React.useEffect(() => {
    load_user();
  }, [load_user]);
  console.log(state);
  return (
    <div className="container">
      <div
        className="flex row"
        style={{ marginTop: "75px", justifyContent: "space-between" }}
      >
        <div className="profile-panel" style={{ minWidth: "280px" }}>
          {state.user && state.ideas && (
            <ProfileCard
              user={state.user}
              idea={state.ideas}
              is_entreprenure={true}
            />
          )}
          {/* {state.user && <DetailsCard userid={state.user && state.user._id} />} */}
        </div>
        <div className="gig-panel">
          <GigDashboard />
          {children}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { load_user })(Profile);
