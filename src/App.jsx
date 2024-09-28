"use client"
import { useState } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: "",
  });

  const [verified, setVerified] = useState(undefined);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userInputs =
      userInput.charOne +
      userInput.charTwo +
      userInput.charThree +
      userInput.charFour;

    if (userInputs === passCode) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={handleSubmit}>
        <Message status={verified} />

        <div>
          <input
            required
            type="password"
            name="charOne"
            maxLength="1"
            value={userInput.charOne}
            onChange={handleInput}
          />

          <input
            required
            type="password"
            name="charTwo"
            maxLength="1"
            value={userInput.charTwo}
            onChange={handleInput}
          />

          <input
            required
            type="password"
            name="charThree"
            maxLength="1"
            value={userInput.charThree}
            onChange={handleInput}
          />

          <input
            required
            type="password"
            name="charFour"
            maxLength="1"
            value={userInput.charFour}
            onChange={handleInput}
          />
        </div>

        <button disabled={verified}>Gönder</button>
      </form>

      <Footer />
    </div>
  );
}
