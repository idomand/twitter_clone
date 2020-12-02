import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";
import ProfilePage from "./ProfilePage";

export default function MyRouter() {
  return (
    <>
      <Router>
        <div className="navBar">
          <Link to="/">home</Link>
          <Link to="/profilePage">profile</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/profilePage">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
