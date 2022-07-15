import React from "react";

export default function nav({ id, show, showFunc }) {
  if (id == "1") {
    if (show == true) {
      return (
        <nav className="small-nav">
          <li>
            <a href="#outer" id="1" onClick={(e) => showFunc(e)}>
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" id="2" onClick={(e) => showFunc(e)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" id="3" onClick={showFunc}>
              Contact
            </a>
          </li>
        </nav>
      );
    } else {
      return (
        <nav className="small-nav">
          <li>
            <a href="#outer" id="1" onClick={(e) => showFunc(e)}>
              Home
            </a>
          </li>
        </nav>
      );
    }
  }
  if (id == "2") {
    if (show == true) {
      return (
        <nav className="small-nav">
          <li>
            <a href="#portfolio" id="2" onClick={(e) => showFunc(e)}>
              Portfolio
            </a>
          </li>
          <li className="first">
            <a href="#outer" id="1" onClick={(e) => showFunc(e)}>
              Home
            </a>
          </li>

          <li>
            <a href="#contact" id="3" onClick={showFunc}>
              Contact
            </a>
          </li>
        </nav>
      );
    } else {
      return (
        <nav className="small-nav">
          <li>
            <a href="#portfolio" id="2" onClick={(e) => showFunc(e)}>
              Portfolio
            </a>
          </li>
        </nav>
      );
    }
  }
  if (id == "3") {
    <nav>
      <li className="first">
        <a href="#contact">Contact</a>
      </li>
      ;
      <li>
        <a href="#outer">Home</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
    </nav>;
  }
}
