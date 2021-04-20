import React, { useState, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { TweetProvider } from "../lip/TweetContext";
import fireBase, { fireStoreApp, firestore } from "../fireBase";

/* //!===NEW CODE---START */
import { useCollectionData } from "react-firebase-hooks/firestore";

/* //!===NEW CODE---END */

export default function Main() {
  /* //!===NEW CODE---START */
  const messagesRef = firestore.collection("tweets");
  const query = messagesRef.orderBy("date").limit(250);
  const [allTweets] = useCollectionData(query, { idField: "id" });
  /* //!===NEW CODE---END */
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
          console.log("myItems :>> ", myItems);
          setTweetList(myItems);
        });
    };
    setInterval(() => {
      fetchTweets();
      setIsLoading(false);
    }, 5000);
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
