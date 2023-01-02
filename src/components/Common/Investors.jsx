import React from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";

function Investors({ state }) {
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {state.users &&
          state.users.map((user) =>
            user.is_entreprenure === false ? (
              <UserCard
                user={user}
                investors={state.investors}
                ideas={state.ideas}
              />
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

export default connect(mapStateToProps, null)(Investors);
