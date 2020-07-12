import React, { useEffect, useState } from "react";
import "./panel.scss";
const firebase = require("firebase");

const AdminPanel = ({ history }) => {
  const [feedbacksObject, setObject] = useState({});
  const [feedbacksList, setList] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) history.push("/admin");
    });
    firebase
      .firestore()
      .collection("feedbacks")
      .doc("feedbacksList")
      .get()
      .then(async (info) => {
        setObject(info.data().feedbacks);
        const newList = [];
        for (var key in info.data().feedbacks) {
          newList.push(key);
        }
        setList(newList);
      });
  }, []);

  return (
    <div className="panel-page">
      {console.log(feedbacksList)}
      <div className="panel-block">
        <h1>Список заявок</h1>
        <div className="feedbacks-list">
          {feedbacksList.length > 0 &&
            feedbacksList.map((element, key) => {
              return (
                <div className="feedback-block" key={key}>
                  <p>Имя: {feedbacksObject[element].name}</p>
                  <p>Номер: {feedbacksObject[element].number}</p>
                  <p>Беспокоит: {feedbacksObject[element].worry}</p>
                </div>
              );
            })}
        </div>
        <a href="/">
          <span onClick={() => firebase.auth().signOut()}>
            Выйти из админ панели
          </span>
        </a>
      </div>
    </div>
  );
};

export default AdminPanel;
