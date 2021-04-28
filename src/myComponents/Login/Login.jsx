import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../lip/AuthContext";
import { useHistory } from "react-router-dom";
import './Login.css'
//   ========


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { logIn, logInWithGoogle } = useAuth();
  const history = useHistory();

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await logIn(email, password);
      history.push("/");
    } catch {
      setError("can't log in");
    }
    setIsLoading(false);
  };

  const logInWithGoogleUser = () => {
    logInWithGoogle();
  };

  return (
    <>
      <Card className="my-form">
        <Card.Title><strong>Log In</strong></Card.Title>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            onSubmit={(event) => {
              onSubmitForm(event);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              Log In
            </Button>
            <p className="border-top border-bottom mt-2">or</p>
          </Form>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={logInWithGoogleUser}
          >
            Log In With Google Account
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
