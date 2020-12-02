import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { getTweets, sentTweet } from "../lip/api";

export default function Main(props) {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchTweets = async () => {
        const response = await getTweets();
        await setTweetList(response.data.tweets);
      };
      fetchTweets();

      setIsLoading(false);
    }, 500);
  }, []);

  let loader;
  if (isLoading) {
    loader = <div className="loader"></div>;
  } else {
    loader = null;
  }

  const getUserTweet = (data) => {
    sentTweet(data);
    setTweetList((tweetList) => {
      return [data, ...tweetList];
    });
  };
  return (
    <div className="main">
      <CreateTweet
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        callback={getUserTweet}
      />
      <div>{loader}</div>
      <TweetsList tweetList={tweetList} setIsLoading={setIsLoading} />
    </div>
  );
}
