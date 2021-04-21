import React from "react";
import dayjs from "dayjs";

export default function TweetItem({ text, userName, createdAt }) {
  return (
    <>
      <div className="tweet-item-top">
        <div>{userName}</div>
        <div>{dayjs.unix(createdAt).format("D.M.YY H:m:s")}</div>
      </div>
      <div className="tweet-item-bottom">
        <p>{text}</p>
      </div>
    </>
  );
}
