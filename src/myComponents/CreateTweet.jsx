import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import { sentTweet } from "../lip/api";
import { useAuth } from "../lip/AuthContext";
import TweetContext from "../lip/TweetContext";

export default function CreateTweet({ setIsLoading, isLoading }) {
  const { currentUser } = useAuth();
  const [userTweet, setUserTweet] = useState("");

  const TweetListWithContext = useContext(TweetContext);
  const onSubmitTweet = async (event) => {
    event.preventDefault();
    await setIsLoading((state) => {
      return !state;
    });
    const createdAt = dayjs().unix();
    console.log("createdAt :>> ", createdAt);
    const newUserTweetObject = {
      userName: currentUser.displayName,
      text: userTweet,
      createdAt: createdAt,
    };

    sentTweet(newUserTweetObject);
    TweetListWithContext.push(newUserTweetObject);
    setUserTweet("");
    setIsLoading(false);
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
          placeholder="what's on your mind"
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
              disabled={
                userTweet.length > 140 || userTweet.length === 0 || isLoading
              }
            />
          </div>
        </div>
      </form>
    </>
  );
}
