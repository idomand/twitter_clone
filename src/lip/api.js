import { firestore } from "../fireBase";

export function sentTweet(tweet) {
  firestore
    .collection("tweets")
    .add({
      text: tweet.text,
      createdAt: tweet.createdAt,
      userName: tweet.userName,
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
