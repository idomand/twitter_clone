import axios from "axios";

const baseUrl = `https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/`;

export function getTweets() {
  return axios.get(`${baseUrl}/tweet`);
}

export function sentTweet(user) {
  return axios.post(`${baseUrl}/user`, user);
}

// export function getUser(userId) {
//   return axios.get(`${baseUrl}/user/${userId}`);
// }

// export function createUser(user) {
//   return axios.post(`${baseUrl}/user`, user);
// }
