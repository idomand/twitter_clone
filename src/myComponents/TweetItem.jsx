import React from "react";

export default function TweetItem(props) {
  //   console.log("props :>> ", props);
  //   console.log("props.element.timeStamp :>> ", props.element.timeStamp);
  const dateCreated = new Date(props.element.timeStamp);
  //   console.log("dateCreated :>> ", dateCreated);
  return (
    <>
      <div className="tweet-item-top">
        <div>{props.element.nameOfUser}</div>
        <div>{dateCreated.toLocaleString()}</div>
      </div>
      <div className="tweet-item-bottom">
        <p>{props.element.text}</p>
      </div>
    </>
  );
}
