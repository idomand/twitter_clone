import React from "react";
import { useAuth } from "../lip/AuthContext";

export default function TweetItem(props) {
  return (
    <>
      <div className="tweet-item-top">
        <div>{props.element.userName}</div>
        <div>{props.element.date}</div>
      </div>
      <div className="tweet-item-bottom">
        <p>{props.element.content}</p>
      </div>
    </>
  );
}
