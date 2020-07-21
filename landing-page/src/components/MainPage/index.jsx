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
          <h3>Гаджиали Даудов</h3>
          <h1>Член Национального Общества Диетологов</h1>
          <h1>
            Эксперт в области диетологии, спортивной фармакологии и
            нутрициологии
          </h1>
          <img src="/images/white-icon.png" alt="photo" />
          <button>Отправить заявку</button>
        </div>
      </div>

      <div className="icons-block">
        <h1>Мои услуги</h1>
        <div className="blocks-holder">
          <div className="icon-block">
            <img src="/svg/pill.svg" alt="pill" />
            <p>
              Я подберу для вас лучшие витамины, полезные вещества для
              набора/сброса веса
            </p>
          </div>
          <div className="icon-block">
            <img src="/svg/food.svg" alt="pill" />
            <p>Я научу вас соблюдать режим правильного питания!</p>
          </div>
          <div className="icon-block">
            <img src="/svg/heart.svg" alt="pill" />
            <p>Я буду следить за твоим здоровьем.</p>
          </div>
        </div>
        <button>Связаться со мной</button>
      </div>

      <div className="brown-block">
        <h1>И еще много всего...</h1>
        <p>
          Скоро я серьезно займусь диетологией. Будьте в курсе событий!
          Подпишитесь на мой instagram: daudovdoc
        </p>
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
