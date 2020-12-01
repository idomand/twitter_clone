import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";

export default function Main() {
  const [tweetList, setTweetList] = useState([]);
  useEffect(() => {
    const storageItems = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      storageItems.push(localStorage.getItem(keys[i]));
    }
    storageItems.forEach((element) => {
      setTweetList((tweetList) => {
        return [JSON.parse(element), ...tweetList];
      });
    });
  }, []);

  const getUserTweet = (data) => {
    setTweetList((tweetList) => {
      return [data, ...tweetList];
    });
  };
  return (
    <div className="main">
      <CreateTweet callback={getUserTweet} />
      <TweetsList tweetList={tweetList} />
    </div>
  );
}
