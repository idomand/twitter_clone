import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import ProfilePage from "../ProfilePage/ProfilePage";
import SignUp from "../SignUp/SignUp";
import { useAuth } from "../../lip/AuthContext";
import { Button } from "react-bootstrap";
import './RouterComponent.css'
export default function RouterComponent() {
  const { currentUser, logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      <Router>
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/profilePage">Profile</Link>
          <Link to="/signUp">Sign Up</Link>
          <Link to="/login">Login</Link>
          {currentUser && (
            <Button variant="link" onClick={handleLogOut}>
              log out
            </Button>
          )}
          {currentUser && <p> hello {currentUser.displayName}</p>}
        </div>
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
