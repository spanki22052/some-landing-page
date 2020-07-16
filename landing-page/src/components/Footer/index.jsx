import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block__lighter">
        <div className="left-side">
          <img
            className="icon-img"
            src="/images/white-icon-text.png"
            alt="white-icon"
          />
          <div className="white-icons-block">
            <img
              className="instagram-icon"
              src="/svg/instagram.svg"
              alt="instagram"
            />
            <img className="vk-icon" src="/svg/vk.svg" alt="vk" />
          </div>
        </div>

        <div className="right-side">
          <h1>Контакты</h1>
          <p>Тел: +7-988-555-88-77</p>
          <p>Тел: +7-988-555-88-77</p>
          <p>Почта: daudovdoc@bk.ru </p>
        </div>
      </div>
      <div className="footer-block__black">
        <div className="text-side">
          <h1>Copyrights 2020 ©</h1>
          <h2>Daudov Doctor </h2>
        </div>
        <div className="subscribe-block">
          <h1>Подписаться:</h1>
          <div className="white-icons-block">
            <img
              className="instagram-icon"
              src="/svg/instagram.svg"
              alt="instagram"
                />
                <img className="vk-icon" src="/svg/vk.svg" alt="vk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
