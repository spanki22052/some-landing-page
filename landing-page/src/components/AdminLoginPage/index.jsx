import React, { useEffect, useState } from "react";
import "./login.scss";

const firebase = require("firebase");

const AdminLoginPage = ({ history }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (_usr) history.push("/adminpanel");
    });
  }, []);

  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const logIn = () => {
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput);
  };

  return (
    <div className="login-page">
      <div className="login-block">
        <h1>Вход в админ панель</h1>
        <div className="input-block">
          <p>Почта:</p>
          <input
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="input-block">
          <p>Пароль:</p>
          <input
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button onClick={logIn}>Войти</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
