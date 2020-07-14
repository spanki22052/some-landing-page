import React from "react";
import "./navbar.scss";

const NavbarComponent = () => {
  //
  return (
    <div className="navbar-component">
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
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
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "60%" }}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Обо мне
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
