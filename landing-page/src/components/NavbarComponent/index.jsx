import React, { useEffect } from "react";
import "./navbar.css";
import $ from "jquery";

const NavbarComponent = () => {
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
        console.log("OK");
      } else {
        $(".nav").removeClass("affix");
      }
    });
  }, []);

  return (
    <div className="navbar-component">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="/">Джеймс</a>
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
