import React from "react";
const TweetContext = React.createContext({});
export const TweetProvider = TweetContext.Provider;
export const TweetConsumer = TweetContext.Consumer;
export default TweetContext;
