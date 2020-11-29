import React, { useState } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";

export default function Main() {
  const [tweetList, setTweetList] = useState([]);

  const getUserTweet = (data) => {
    setTweetList((tweetList) => {return [data, ...tweetList];});
  };
  return (
    <div className="main">
      <CreateTweet callback={getUserTweet} />
      <TweetsList tweetList={tweetList} />
    </div>
  );
}
