import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import ProfilePage from "../ProfilePage/ProfilePage";
import SignUp from "../SignUp/SignUp";
import { useAuth } from "../../lip/AuthContext";
import NavBar from "../NavBar/NavBar";
import "./RouterComponent.css";
export default function RouterComponent() {
  const { currentUser } = useAuth();

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {currentUser ? (
            <Route exact path="/">
              {" "}
              <Main />{" "}
            </Route>
          ) : (
            <Route exact path="/">
              {" "}
              <Login />{" "}
            </Route>
          )}
          <Route exact path="/profilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
