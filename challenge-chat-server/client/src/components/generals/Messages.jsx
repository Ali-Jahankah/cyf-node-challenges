import React, { useState } from "react";
import Message from "./Message";
import "../../style/messages.css";
const Messages = ({ showMessages, setShowMessages, data }) => {
  const [messages, setMessages] = useState(data);
  return (
    <article className="messages_cont">
      <button
        className="messages_btn"
        onClick={() => setShowMessages(!showMessages)}
      >
        {showMessages ? "Hide Messages" : "Show Messages"}
      </button>
      {showMessages && (
        <section className="messages_section">
          {messages.map((item) => (
            <Message item={item}></Message>
          ))}
        </section>
      )}
    </article>
  );
};

export default Messages;
