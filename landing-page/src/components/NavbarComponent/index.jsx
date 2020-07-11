import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
            <a href="#">Your Logo</a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
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
      <div
        style={{
          backgroundImage: "url('/images/doctor-image.jpg')",
          width: "100%",
          height: "1900px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          objectFit: "contain",
        }}
      ></div>
    </div>
  );
};

export default NavbarComponent;
