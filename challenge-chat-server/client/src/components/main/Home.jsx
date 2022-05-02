import React, { useState, useEffect } from "react";
import Form from "../generals/Form";
import Messages from "../generals/Messages";
import "../../style/home.css";
const Home = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    data.length === 0 &&
      fetch("https://cyf-ali-jahankah-chat-server.glitch.me/")
        .then((res) => res.json())
        .then((data) => setData(data));
  }, []);
  return (
    <article className="home">
      <Form></Form>
      {data.length !== 0 ? (
        <Messages
          showMessages={showMessages}
          setShowMessages={setShowMessages}
          data={data}
        ></Messages>
      ) : (
        <h1>Loading...</h1>
      )}
    </article>
  );
};

export default Home;
