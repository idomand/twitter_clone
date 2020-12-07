import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import ProfilePage from "./ProfilePage";
import SignUp from "./SignUp";
import { useAuth } from "../lip/AuthContext";
import { Button } from "react-bootstrap";
export default function MyRouter() {
  const { currentUser, logOut } = useAuth();
  const handleLogOut = async () => {
    console.log("on log out func");
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
          {currentUser && <p> "hello " + {currentUser.email}</p>}
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
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
