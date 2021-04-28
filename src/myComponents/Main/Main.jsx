import React, { useState, useEffect } from "react";
import CreateTweet from "../CreateTweet/CreateTweet";
import TweetsList from "../TweetsList/TweetsList";
import { TweetProvider } from "../../lip/TweetContext";
import { firestore } from "../../fireBase";
import './Main.css'
export default function Main() {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchTweets = async () => {
      let myItems = [];
      firestore
        .collection("tweets")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            myItems.push(doc.data());
          });
          setTweetList(myItems);
        });
    };
    fetchTweets();
    setIsLoading(false);
  }, [tweetList]);
  let loader;
  if (isLoading) {
    loader = <div className="loader"></div>;
  } else {
    loader = null;
  }
  return (
    <div className="main">
      <TweetProvider value={tweetList}>
        <CreateTweet isLoading={isLoading} setIsLoading={setIsLoading} />
        <div>{loader}</div>
        <TweetsList />
      </TweetProvider>
    </div>
  );
}
