import axios from "axios";

const baseUrl = `https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/`;

export function getTweets() {
  return axios.get(`${baseUrl}/tweet`);
}

export function sentTweet(tweet) {
  try {
    // throw new Error();
    return axios.post(`${baseUrl}tweet`, tweet);
  } catch (error) {
    console.log("error", error);

    return error;
  }
}
