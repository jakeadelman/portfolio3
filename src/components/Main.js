import React from "react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useWindowDimensions } from "./heightWidth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  const { height, width } = useWindowDimensions();
  console.log(width);

  const isBig = height > 1000 && width > 900;
  console.log(isBig);

  return (
    <div className="outer" id="outer">
      <div className="side-nav">
        <div className="name">
          <span>J</span>acob
          <div className="webdev grey">Web Developer</div>
        </div>
        {isBig ? (
          <nav>
            <ul>
              <li className="first">
                <a href="#outer">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li class="last">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <li className="first">
              <a href="#outer">Home</a>
            </li>
          </nav>
        )}
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
      <Contact />
    </div>
  );
}
