import React from "react";
import $ from "jquery";

const fadeInh1 = () => {
  const el = document.getElementById("helector");

  $(el).slideToggle();
};

const MainPage = () => {

  return (
    <div className="main-page">
      <h1 id="helector">Hello from Main Page</h1>
      <button onClick={() => fadeInh1()}>Hide text</button>
    </div>
  );
};

export default MainPage;
