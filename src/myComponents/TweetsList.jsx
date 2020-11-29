import React, { useState } from "react";
import TweetItem from './TweetItem'

export default function TweetsList(props) {
  console.log("props.tweetList :>> ", props.tweetList);

  const results = props.tweetList.map((element) => {
    console.log("element :>> ", element);
  });

  return <ul>



  </ul>;
}
