import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
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
            <a href="https://stepnbox.xyz">
              <img
                src={require("../assets/images/stepnbox5.png")}
                className="first-card-img"
              />
              <div className="label-img">stepnbox.xyz</div>
            </a>
          </div>
          <div className="card">
            <a href="https://google.ca">
              <img src="https://via.placeholder.com/250" />
              <div className="label-img">google.ca</div>
            </a>
          </div>
          <div className="card">
            <a href="https://google.ca">
              <img src="https://via.placeholder.com/250" />
              <div className="label-img">google.ca</div>
            </a>
          </div>
          <div className="card">
            <a href="https://google.ca">
              <img src="https://via.placeholder.com/250" />
              <div className="label-img">google.ca</div>
            </a>
          </div>
          <div className="card">
            <a href="https://google.ca">
              <img src="https://via.placeholder.com/250" />
              <div className="label-img">google.ca</div>
            </a>
          </div>
          <div className="card">
            <a href="https://google.ca">
              <img src="https://via.placeholder.com/250" />
              <div className="label-img">google.ca</div>
            </a>
          </div>

          <div></div>
        </section>
      </div>
    </div>
  );
}
