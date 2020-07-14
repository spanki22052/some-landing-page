import React, { useEffect, useState } from "react";
import "./navbar.css";
import $ from "jquery";

const NavbarComponent = () => {
  var [photoLink, changeLink] = useState("/images/icon.png");
  useEffect(() => {
    $(".navTrigger").click(function () {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });

    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
        changeLink("/images/icon.png");
        console.log("OK");
      } else {
        changeLink("/images/icon.png");
        $(".nav").removeClass("affix");
      }
    });
  }, []);

  return (
    <div className="navbar-component" style={{ zIndex: "5" }}>
      <nav className="nav">
        <div
          className="container"
          style={{
            width: "100% !important",
            marginLeft: "5%",
            marginRight: "0",
          }}
        >
          <div className="logo">
            <a href="/">
              <img src={photoLink} alt="site-icon" style={{ float: "left" }} />
              <div className="txt-blck">
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "0.7em",
                    lineHeight: "30px",
                    marginTop: "10px",
                  }}
                >
                  Doctor
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "0.7em",
                    lineHeight: "5px",
                    marginLeft: '15px',
                  }}
                >
                  Daudov
                </p>
              </div>
            </a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="/about">обо мне</a>
              </li>
              <li>
                <a href="/feedback">обратная связь</a>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
