import "bulma/css/bulma.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import "font-awesome/css/font-awesome.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import { Redirect, Route, Switch } from "react-router-dom";
import Active from "./components/Profile/components/childcomponents/Active";
import Pending from "./components/Profile/components/childcomponents/Pending";
import AddGig from "./components/AddGig/AddGig";
import Overview from "./components/AddGig/Components/Overview";
import GigView from "./components/views-gigs/GigView";
import { connect } from "react-redux";
import { checkAuthenticated } from "./redux-implementation/actions";
import ProtectedRoute from "./components/Common/protectedRoute";

function App({ checkAuthenticated, state }) {
  React.useEffect(async () => {
    await checkAuthenticated();
  }, [checkAuthenticated]);
  return (
    <main>
      <Navbar />
      {/* <div className="container"> */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          path="/signup"
          render={() => {
            if (!state.isAuthenticated) return <Signup />;
            else return <Redirect to="/profile" />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/addidea" component={AddGig} />
        <Route path="/editprofile/:id" component={EditProfile} />
        <Route path="/profile/editidea/:id" component={Overview} />
        <Route path="/idea/:id" component={GigView} />
        {/* <ProtectedRoute path="/profile" component={Profile} /> */}
        <ProtectedRoute
          exact
          path="/profile/active"
          render={() => {
            return (
              <Profile>
                <Active />
              </Profile>
            );
          }}
        />
        <ProtectedRoute
          exact
          path="/profile/pending"
          render={() => {
            return (
              <Profile>
                <Pending />
              </Profile>
            );
          }}
        />
        <Redirect from="/" exact to="/home" />
        <Redirect from="/profile" exact to="/profile/active" />
      </Switch>
      {/* </div> */}
      <Footer />
    </main>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { checkAuthenticated })(App);
