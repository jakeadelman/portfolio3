import React from "react";
import Portfolio from "./Portfolio";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  return (
    <div className="outer">
      <div className="side-nav">
        <div className="name">
          <span>J</span>acob
          <div className="webdev grey">Web Developer</div>
        </div>
        <nav>
          <ul className="grey">
            <li className="first">Home</li>
            <li>Portfolio</li>
            <li>About</li>
            <li class="last">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="home-title">
        <div class="ribbon">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="ribbon-icon" />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="ribbon-icon"
          />
          <FontAwesomeIcon icon={faGithub} size="2x" className="ribbon-icon" />
        </div>
        <div className="home-title-mid-outer">
          <div className="home-title-mid">
            <div className="home-title-inner">
              <div className="containing-mydiv">
                <div className="mydiv">
                  <h1>Hi,</h1>
                </div>
                <div class="name2">
                  I'm <span>Jacob</span>,{" "}
                  <div className="developer">Web Developer.</div>
                </div>
              </div>
              <div className="about-section">
                <p>Frontend Web Developer / React Expert</p>
              </div>
              <button className="contact-me">
                <span>Contact Me !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
    </div>
  );
}
