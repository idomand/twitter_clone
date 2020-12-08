import React, { useContext } from "react";
import TweetItem from "./TweetItem";
import TweetContext from "../lip/TweetContext";

export default function TweetsList() {
  let myArray = [];
  const TweetListWithContext = useContext(TweetContext);

  TweetListWithContext.forEach((element) => {
    myArray.push([element, element.date]);
  });

  myArray.sort((a, b) => {
    return a[1] - b[1];
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
