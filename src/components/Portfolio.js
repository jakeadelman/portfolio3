import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="inner-portfolio">
        <div className="portfolio-title-wrap">
          <h2 className="portfolio-title">My Portfolio</h2>
          <p className="portfolio-body">
            Here is a small sample of my work. I've done a number of personal
            projects such as Stepnbox.xyz and Quickstrrt. Ive also done some
            client work building wordpress websites for businesses!
          </p>
        </div>
        <section className="cards">
          <div className="card">
            <img
              src={require("../assets/images/stepnbox5.png")}
              className="first-card-img"
            />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" />
          </div>

          <div></div>
        </section>
      </div>
    </div>
  );
}
