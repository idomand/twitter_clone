import React, { useState } from "react";

export default function ProfilePage(props) {
  const [userName, setUserName] = useState("");
  const onUserFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    console.log("localStorage :>> ", localStorage);
  };
  return (
    <div className="profilePage">
      <h1>profile</h1>
      <div>
        <h3>User Name</h3>
        <form
          onSubmit={(event) => {
            onUserFormSubmit(event);
          }}
        >
          <input
            type="text"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input type="submit" name="save" value="save" />
        </form>
      </div>
    </div>
  );
}
