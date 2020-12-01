import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { getTweets } from "../lip/api";

export default function Main() {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await getTweets();
      // const tweetList = await response.Json();
      await setTweetList(response.data.tweets);
    };
    fetchTweets();
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
