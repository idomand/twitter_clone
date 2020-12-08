import fireBase, { fireStoreApp } from "../fireBase";

let fireStoreDataBase = fireBase.firestore(fireStoreApp);

export function sentTweet(tweet) {
  fireStoreDataBase
    .collection("tweets")
    .add({
      content: tweet.content,
      date: tweet.date,
      userName: tweet.userName,
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
