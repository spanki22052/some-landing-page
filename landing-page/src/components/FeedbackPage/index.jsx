import React, { useEffect, useState } from "react";
import "./feedback.scss";
const firebase = require("firebase");

const FeedbackPage = () => {
  const [numberInput, setNumber] = useState("");
  const [nameInput, setName] = useState("");
  const [worryInput, setWorry] = useState("");

  return (
    <div className="feedback-page">
      <div className="feedback-block">
        <div className="feedback-block__padding">
          <h1>Обратная связь</h1>
          <div className="input-block">
            <p>Телефон:</p>
            <input
              value={numberInput}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
            />
          </div>
          <div className="input-block">
            <p>Имя:</p>
            <input
              value={nameInput}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="input-block">
            <p>Что вас беспокоит:</p>
            <textarea
              value={worryInput}
              onChange={(e) => setWorry(e.target.value)}
              type="text"
            />
          </div>
          <div className="butt-block">
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
