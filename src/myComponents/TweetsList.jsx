import React from "react";
import TweetItem from "./TweetItem";

export default function TweetsList(props) {
  // console.log("props.tweetList :>> ", props.tweetList);

  const results = props.tweetList.map((element) => {
    // console.log("element :>> ", element);
    return (
      <li key={element.timeStamp.toString()} className="tweet-item">
        <TweetItem element={element} />
      </li>
    );
  });
  console.log("results :>> ", results);
  return <ul className="tweet-list">{results}</ul>;
}
