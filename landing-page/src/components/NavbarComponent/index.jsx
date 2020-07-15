import React from "react";
import "./navbar.scss";

const NavbarComponent = () => {
  return (
    <div className="navbar-component">
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="container"
          style={{ marginLeft: "5%", width: "100%", maxWidth: "none" }}
        >
          <a className="navbar-brand" href="#">
            <img src="/images/white-icon-text.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "55%" }}>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ width: "115px" }}>
                  DR. DAUDOV
                </a>
              </li>
              <div className="white-line"></div>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  НОВОСТИ
                </a>
              </li>
              <div className="white-line"></div>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  СВЯЗЬ
                </a>
              </li>
              <div className="white-line"></div>
            </ul>
          </div>
        </div>
      </nav>{" "}
      *
    </div>
  );
};

export default NavbarComponent;
