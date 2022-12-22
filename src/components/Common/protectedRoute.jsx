import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({
  state,
  path,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!state.isAuthenticated)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(ProtectedRoute);
