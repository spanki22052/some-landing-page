import React from "react";
import "./login.scss";

const AdminLoginPage = () => {
  return (
    <div className="login-page">
        <div className="login-block">
            <h1>Вход в админ панель</h1>
            <div className="input-block">
                <p>Почта:</p>
                <input type="text"/>
            </div>
            <div className="input-block">
                <p>Пароль:</p>
                <input type="text"/>
            </div>

        </div>
    </div>
  );
};

export default AdminLoginPage;
