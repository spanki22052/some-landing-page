import React from "react";
import "./about.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div
        className="photo-block"
        style={{
          backgroundImage: "url('/images/doctor-image-2.jpg')",
        }}
      >
        <div className="photo-block__padding">
          <div className="white-block">
            <img src="/images/doctor.jpeg" alt="doctorimage" />
            <div className="text-block">
              <h1>Я хирург!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
