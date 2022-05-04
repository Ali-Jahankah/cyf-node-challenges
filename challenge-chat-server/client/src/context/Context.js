import React, { useState } from "react";
import UserContext from "./UserContext";

const Context = ({ children }) => {
  const [showMessages, setShowMessages] = useState(false);
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [textErrorMessage, setTextErrorMessage] = useState("");

  const inputHandler = (event, num) => {
    if (num === 100) {
      if (event.target.value.length >= 100 && event.key !== "Backspace") {
        event.preventDefault();
        setTextErrorMessage(`Not more than ${num} letters!`);
      } else {
        setTextErrorMessage("");

        setTextInput(event.target.value);
      }
    } else {
      if (event.target.value.length >= 20 && event.key !== "Backspace") {
        event.preventDefault();
        setNameErrorMessage(`Not more than ${num} letters!`);
      } else {
        setNameErrorMessage("");

        setNameInput(event.target.value);
      }
    }
  };

  const formHandler = (e) => {
    if (nameInput.length !== 0 && textInput !== 0) {
    }
  };

  return (
    <UserContext.Provider
      value={{
        showMessages,
        setShowMessages,
        data,
        setData,
        messages,
        setMessages,
        nameInput,
        setNameInput,
        textInput,
        setTextInput,
        nameErrorMessage,
        setNameErrorMessage,
        formHandler,
        textErrorMessage,
        setTextErrorMessage,
        inputHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
