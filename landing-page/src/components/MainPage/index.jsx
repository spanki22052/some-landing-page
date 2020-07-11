import React, { useEffect } from "react";
import $ from "jquery";

const fadeInh1 = () => {
  const el = document.getElementById("helector");
  $(el).slideToggle();
};

const MainPage = () => {
  useEffect(() => {
    $("button").on("click", () => {
      $("#helector").fadeToggle();
    });
  }, []);

  return (
    <div className="main-page">
      
    </div>
  );
};

export default MainPage;
