import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { getTweets, sentTweet } from "../lip/api";
import { TweetProvider } from "../lip/TweetContext";
export default function Main(props) {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setInterval(() => {
      const fetchTweets = async () => {
        const response = await getTweets();
        await setTweetList(response.data.tweets);
      };
      fetchTweets();
      setIsLoading(false);
    }, 5000);
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
      <TweetProvider value={tweetList}>
        <CreateTweet
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          callback={getUserTweet}
        />
        <div>{loader}</div>
        <TweetsList />
      </TweetProvider>
    </div>
  );
}
