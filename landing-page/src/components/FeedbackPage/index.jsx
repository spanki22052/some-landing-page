import React, { useEffect, useState } from "react";
import "./feedback.scss";
const firebase = require("firebase");

const FeedbackPage = () => {
  const [numberInput, setNumber] = useState("");
  const [nameInput, setName] = useState("");
  const [worryInput, setWorry] = useState("");
  const [feedbacksObject, setObject] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("feedbacks")
      .doc("feedbacksList")
      .get()
      .then(async (info) => {
        setObject(info.data().feedbacks);
      });
  }, []);

  const sendFeedbackToDb = () => {
    let number = {
      number: numberInput,
      name: nameInput,
      worry: worryInput,
    };

    let newObject = { ...feedbacksObject };
    newObject[numberInput] = number;

    numberInput.length > 0 &&
      nameInput.length > 0 &&
      worryInput.length > 0 &&
      setObject(newObject);
    firebase.firestore().collection("feedbacks").doc("feedbacksList").set({
      feedbacks: newObject,
    });

    setName('')
    setNumber('')
    setWorry('')
  };

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
            <button onClick={sendFeedbackToDb}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
