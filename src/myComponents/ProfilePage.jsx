import React, { useState } from "react";

export default function ProfilePage(props) {
  const [userName, setUserName] = useState("");
  const onUserFormSubmit = (event) => {
    if (userName) {
      event.preventDefault();
      localStorage.setItem("userName", userName);
      setUserName("");
    }
  };
  return (
    <div className="profile-page">
      <h1>profile</h1>
      <div className="profile-page-form">
        <h3>User Name</h3>
        <form
          onSubmit={(event) => {
            onUserFormSubmit(event);
          }}
        >
          <input
            type="text"
            value={userName}
            placeholder="Enter User Name"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <div className="profile-page-input">
            <input
              className="tweet-button"
              type="submit"
              name="save"
              value="save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
