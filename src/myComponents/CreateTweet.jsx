import React, { useState } from "react";

export default function CreateTweet(props) {
  const [userTweet, setUserTweet] = useState("what is on your mind");

  const onSubmitTweet = (event) => {
    event.preventDefault();
    const newUserTweetObject = {
      text: userTweet,
      timeStamp: Date.now(),
    };
    props.callback(newUserTweetObject);
    setUserTweet("");
  };
  const changeHandler = (event) => {
    setUserTweet(event.target.value);
  };
  return (
    <>
      <form
        className="tweet-form"
        onSubmit={(event) => {
          onSubmitTweet(event);
        }}
      >
        <textarea
          placeholder={"what is on your mind"}
          onChange={(event) => {
            changeHandler(event);
          }}
          value={userTweet}
        />
        <div>
          <input type="submit" value="Tweet" className="tweet-button" />
        </div>
      </form>
    </>
  );
}
