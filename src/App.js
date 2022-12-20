import "bulma/css/bulma.css";
import React, { useState } from "react";
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

function App() {
  React.useEffect(() => {
    localStorage.setItem("user_id", "639fb7692d575b0588e3eb76");
  }, []);
  return (
    <main>
      <Navbar />
      {/* <div className="container"> */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/addidea" component={AddGig} />
        <Route path="/editprofile/:id" component={EditProfile} />
        <Route path="/profile/editidea/:id" component={Overview} />
        <Route path="/idea/:id" component={GigView} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route
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
        <Route
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

export default App;
