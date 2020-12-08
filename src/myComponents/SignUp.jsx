import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../lip/AuthContext";

//   ========

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUpWithEmail } = useAuth();

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (password !== passwordConfirmation) {
      return setError("passwords don't match");
    }
    try {
      await signUpWithEmail(email, password);
    } catch {
      setError("can't sign up");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card className="my-form">
        <Card.Title>this is the sign up page</Card.Title>
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
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-Enter Password"
                required
                value={passwordConfirmation}
                onChange={(event) => {
                  setPasswordConfirmation(event.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
