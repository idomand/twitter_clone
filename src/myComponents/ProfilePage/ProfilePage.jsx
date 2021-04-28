import React, { useState } from "react";
import { useAuth } from "../../lip/AuthContext";
import { Form, Button, Card } from "react-bootstrap";
import './ProfilePage.css'
// ==========

export default function ProfilePage() {
  const { updateUser } = useAuth();
  const [userName, setUserName] = useState("");
  // let currentUserName = currentUser.displayName;
  // ==========

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (userName) {
      updateUser(userName);
      setUserName("");
    }
  };
  return (
    <>
      <Card className="my-form">
        <Card.Title>
          <strong>Update User Profile</strong>
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(event) => {
              onSubmitForm(event);
            }}
          >
            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter New Name"
                value={userName}
                required
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
