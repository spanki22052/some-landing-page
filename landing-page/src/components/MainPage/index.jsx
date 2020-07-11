import React, { useEffect } from "react";
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

export default MainPage;
