import React from "react";
import Message from "./Message";
import "../../style/messages.css";
const Messages = () => {
  return (
    <article className="messages_cont">
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </article>
  );
};

export default Messages;
