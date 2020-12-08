import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { TweetProvider } from "../lip/TweetContext";
import fireBase, { fireStoreApp } from "../fireBase";

export default function Main() {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let fireStoreDataBase = fireBase.firestore(fireStoreApp);

  useEffect(() => {
    setIsLoading(true);
    const fetchTweets = async () => {
      let myItems = [];
      fireStoreDataBase
        .collection("tweets")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            myItems.push(doc.data());
          });
          setTweetList(myItems);
        });
    };
    setInterval(() => {
      fetchTweets();
      setIsLoading(false);
    }, 2000);
    return () => {
      return;
    };
  }, []);

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
