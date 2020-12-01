import React, { useState } from "react";

export default function CreateTweet(props) {
  const [userTweet, setUserTweet] = useState("");
  // const [tweetButton, setTweetButton] = useState(true);

  const onSubmitTweet = (event) => {
    event.preventDefault();
    const newUserTweetObject = {
      nameOfUser: "ido",
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
          placeholder="what is on your mind"
          onChange={(event) => {
            changeHandler(event);
          }}
          value={userTweet}
        />
        <div className="form-bottom">
          <p className="error-message">
            {userTweet.length > 140
              ? "The tweet can't contain more then 140 chars."
              : null}
          </p>
          <div>
            <input
              type="submit"
              value="Tweet"
              className="tweet-button"
              disabled={userTweet.length > 140}
            />
          </div>
        </div>
      </form>
    </>
  );
}
