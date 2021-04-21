import React, { useContext } from "react";
import TweetItem from "./TweetItem";
import TweetContext from "../lip/TweetContext";
import dayjs from "dayjs";

export default function TweetsList() {
  let myArray = [];
  const TweetListWithContext = useContext(TweetContext);
  TweetListWithContext.forEach((element) => {
    myArray.push([element, element.createdAt]);
  });

  myArray.sort((a, b) => {
    return a[1] - b[1];
  });
  const results = myArray.map((element) => {
    return (
      <li key={element[1]} className="tweet-item">
        <TweetItem
          text={element[0].text}
          createdAt={element[0].createdAt}
          userName={element[0].userName}
        />
      </li>
    );
  });
  return <ul className="tweet-list">{results}</ul>;
}
