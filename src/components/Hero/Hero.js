import React from "react";

function Hero() {
  return (
    <div id="hero" className="home">
      <div className="container">
        <div className="hero-content">
          <h1>
            I'm Ahmed Fouad
            <span
              className="typed"
              data-typed-items="Alex Smith, Designer, Developer, Freelancer, Photographer"
            ></span>
          </h1>
          <p>SW Eng. & MERN-stack developer</p>

          <ul className="list-unstyled list-social">
            <li>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
