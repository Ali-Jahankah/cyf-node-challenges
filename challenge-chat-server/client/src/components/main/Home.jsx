import React, { useContext, useEffect } from "react";
import Form from "../generals/Form";
import UserContext from "../../context/UserContext";

import Messages from "../generals/Messages";
import "../../style/home.css";
const Home = () => {
  const context = useContext(UserContext);

  return (
    <article className="home">
      <Form></Form>

      <Messages></Messages>
    </article>
  );
};

export default Home;
