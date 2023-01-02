import React from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";

function Entrepreneures({ state }) {
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {state.users &&
          state.users.map((user) =>
            user.is_entreprenure === true ? (
              <UserCard user={user} ideas={state.ideas} investors={state.investors} />
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Entrepreneures);
