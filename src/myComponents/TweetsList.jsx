import React from "react";
import TweetItem from "./TweetItem";

export default function TweetsList(props) {
  let myArray = [];

  props.tweetList.forEach((element) => {
    myArray.push([element, element.date]);
  });
  myArray.sort((a, b) => {
    return b - a;
  });
  const results = myArray.map((element) => {
    return (
      <li key={element[1]} className="tweet-item">
        <TweetItem element={element[0]} />
      </li>
    );
  });
  return <ul className="tweet-list">{results}</ul>;
}
