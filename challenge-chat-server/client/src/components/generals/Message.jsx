import React from "react";
import "../../style/message.css";
const Message = ({ item }) => {
  return (
    <div className="message_cont">
      <h4>
        {item.from} <span className="remove_btn">Delete</span>
      </h4>
      <p className="message_text">{item.text}</p>
    </div>
  );
};

export default Message;
