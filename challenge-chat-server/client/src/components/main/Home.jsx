import React, { useContext, useEffect } from "react";
import Form from "../generals/Form";
import UserContext from "../../context/UserContext";

import Messages from "../generals/Messages";
import "../../style/home.css";
const Home = () => {
  const context = useContext(UserContext);
  useEffect(() => {
    context.data.length === 0 &&
      fetch("https://cyf-ali-jahankah-chat-server.glitch.me/")
        .then((res) => res.json())
        .then((data) => {
          context.setData(data);
          context.setMessages(data);
        });
  }, []);
  return (
    <article className="home">
      <Form></Form>
      {context.data.length !== 0 ? (
        <Messages></Messages>
      ) : (
        <h1 style={{ color: "white" }}>Loading...</h1>
      )}
    </article>
  );
};

export default Home;
