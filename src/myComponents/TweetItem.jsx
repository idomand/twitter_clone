import React from "react";

export default function TweetItem(props) {
  //   const dateCreated = new Date(props.element.date);
  return (
    <>
      <div className="tweet-item-top">
        <div>{props.element.userName}</div>
        {/* <div>{dateCreated.toLocaleString()}</div> */}
        <div>{props.element.date}</div>
      </div>
      <div className="tweet-item-bottom">
        <p>{props.element.content}</p>
      </div>
    </>
  );
}
//   content: "ssssc"
// date: "2020-12-01T16:05:46.614Z"
// id: "zfn1JneoNu7JBPcirWDY"
// userName: "Pablo Escobar
