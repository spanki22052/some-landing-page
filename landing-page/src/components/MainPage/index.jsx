import React, { useEffect } from "react";
import "./mainpage.scss";
import $ from "jquery";

const MainPage = () => {
  useEffect(() => {
    $("button").on("click", () => {
      $("#helector").fadeToggle();
    });
  }, []);

  return (
    <div className="main-page">
      <div
        className="photo-block"
        style={{
          backgroundImage: "url('/images/first-black-image.png')",
        }}
      >
        <div className="text-block">
          <h1>Следите за своим питанием вместе с доктором Даудовым.</h1>
          <img src="/images/white-icon.png" alt="photo" />
          <button>Отправить заявку</button>
        </div>
      </div>

      <div className="minbor-block">
        <a href="https://www.who.int/ru">
          <img className="WR" src="/images/world.jpg" alt="gerb" />
        </a>
        <a href="https://minzdrav.gov.ru/">
          <img className="RF" src="/images/gerb_minzdrava.png" alt="gerb" />
        </a>
        <a href="https://www.rospotrebnadzor.ru/">
          <img className="RS" src="/images/rospotreb.png" alt="gerb" />
        </a>
        <a href="https://www.rospotrebnadzor.ru/">
          <img className="DB" src="/images/dubaiD.png" alt="gerb" />
        </a>
      </div>
    </div>
  );
};

export default MainPage;
