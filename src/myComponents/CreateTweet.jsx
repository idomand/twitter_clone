import React, { useState, useContext } from "react";
import TweetContext from "../lip/TweetContext";
export default function CreateTweet(props) {
  const [userTweet, setUserTweet] = useState("");

  const TweetListWithContext = useContext(TweetContext);

  const onSubmitTweet = async (event) => {
    event.preventDefault();
    await props.setIsLoading((state) => {
      return !state;
    });

    const DateCrated = new Date();
    const userName = localStorage.getItem("userName");
    const newUserTweetObject = {
      userName: userName,
      content: userTweet,
      date: DateCrated.toISOString(),
    };
    TweetListWithContext.push(newUserTweetObject);
    console.log(TweetListWithContext.length);
    setUserTweet("");
    props.setIsLoading(false);
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
              disabled={
                userTweet.length > 140 ||
                userTweet.length === 0 ||
                props.isLoading
              }
            />
          </div>
        </div>
      </form>
    </>
  );
}
