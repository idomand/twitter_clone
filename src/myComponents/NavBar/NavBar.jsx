import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../../lip/AuthContext";
import "./NavBar.css";
export default function NavBar() {
  const { currentUser, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <nav className="navBar">
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
    </nav>
  );
}
