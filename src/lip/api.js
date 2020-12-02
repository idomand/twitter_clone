import axios from "axios";

const baseUrl = `https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/`;

export function getTweets() {
  console.log("getTweets - from server");
  return axios.get(`${baseUrl}/tweet`);
}

export function sentTweet(tweet) {
  console.log("sentTweet --- to server");
  try {
    console.log("sentTweet-try");
    // throw new Error();
    return axios.post(`${baseUrl}tweet`, tweet);
  } catch (error) {
    console.log("error", error);
    
    return error;
  }
}
