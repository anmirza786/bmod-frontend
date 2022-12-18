import "bulma/css/bulma.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import "font-awesome/css/font-awesome.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Profile from "./components/Profile/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import Active from "./components/Profile/components/childcomponents/Active";
import Pending from "./components/Profile/components/childcomponents/Pending";

function App() {
  const { user, setUser } = useState();
  return (
    <main>
      <Navbar user={user} />
      {/* <div className="container"> */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
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
