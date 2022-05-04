import React, { useContext } from "react";
import Message from "./Message";
import UserContext from "../../context/UserContext";
import "../../style/messages.css";
const Messages = () => {
  const context = useContext(UserContext);
  return (
    <article className="messages_cont">
      <button
        className="messages_btn"
        onClick={() => context.setShowMessages(!context.showMessages)}
      >
        {context.showMessages ? "Hide Messages" : "Show Messages"}
      </button>
      {context.showMessages && (
        <section className="messages_section">
          {context.data ? (
            context.messages.map((item, index) => (
              <Message key={index} item={item}></Message>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </section>
      )}
    </article>
  );
};

export default Messages;
